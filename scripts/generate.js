#!/usr/bin/env node
/**
 * generate.js
 *
 * Generates ng-new snapshots for one or more Angular major versions.
 *
 * Usage:
 *   node scripts/generate.js                          # all versions in version-map.js
 *   node scripts/generate.js --versions '[17,18,21]'  # specific Angular majors
 *   node scripts/generate.js --versions '[17]' --node-group '[17,18,19,20,21]'
 *     # CI matrix mode: only processes majors in the intersection of --versions and --node-group
 *
 * Requirements (local): fnm installed, target Node versions installed via `fnm install <n>`
 * Requirements (CI):    Node already set to correct version via actions/setup-node
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync, spawnSync } = require('child_process');
const { VERSION_MAP } = require('./version-map');

const DATA_DIR = path.join(__dirname, '../data');
const SNAPSHOTS_DIR = path.join(DATA_DIR, 'snapshots');
const VERSIONS_FILE = path.join(DATA_DIR, 'versions.json');

// Parse CLI args
const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(name);
  return idx !== -1 ? args[idx + 1] : null;
}

const versionsArg = getArg('--versions');
const nodeGroupArg = getArg('--node-group');

let targetMajors = VERSION_MAP.map(e => e.angularMajor);
if (versionsArg) {
  const parsed = JSON.parse(versionsArg);
  targetMajors = targetMajors.filter(m => parsed.includes(m));
}
if (nodeGroupArg) {
  const group = JSON.parse(nodeGroupArg);
  targetMajors = targetMajors.filter(m => group.includes(m));
}

if (targetMajors.length === 0) {
  console.log('No versions to generate for this run.');
  process.exit(0);
}

console.log(`Generating snapshots for Angular majors: ${targetMajors.join(', ')}`);

// Detect if we're in CI (Node version already set by actions/setup-node)
const IS_CI = !!process.env.CI;

function runCommand(cmd, options = {}) {
  return spawnSync(cmd, { shell: true, stdio: 'pipe', encoding: 'utf8', ...options });
}

function hasFnm() {
  const result = runCommand('fnm --version');
  return result.status === 0;
}

function getNodeVersionForMajor(nodeVersionMajor) {
  // Check if fnm has this version installed
  const result = runCommand(`fnm list`);
  if (result.status !== 0) return null;
  const lines = result.stdout.split('\n').map(l => l.trim()).filter(Boolean);
  // Find a version matching the major
  const match = lines.find(l => {
    const ver = l.replace(/[^0-9.]/g, '').split('.')[0];
    return parseInt(ver) === nodeVersionMajor;
  });
  return match ? match.replace(/[^0-9.]/g, '') : null;
}

function collectFiles(dir, baseDir = dir) {
  const files = {};
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
    // Skip node_modules, .git, and binary-like files
    if (entry.name === 'node_modules' || entry.name === '.git') continue;
    if (entry.isDirectory()) {
      Object.assign(files, collectFiles(fullPath, baseDir));
    } else {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        files[relPath] = content;
      } catch (e) {
        // Skip binary files
      }
    }
  }
  return files;
}

function extractPackageMeta(files) {
  const pkg = files['package.json'];
  if (!pkg) return {};
  try {
    const json = JSON.parse(pkg);
    const deps = { ...json.dependencies, ...json.devDependencies };
    function cleanVer(v) { return v ? v.replace(/[\^~>=<]/g, '').split(' ')[0] : null; }
    return {
      angularVersion: cleanVer(deps['@angular/core']),
      cliVersion: cleanVer(deps['@angular/cli']),
      typescriptVersion: cleanVer(deps['typescript']),
      rxjsVersion: cleanVer(deps['rxjs']),
    };
  } catch (e) {
    return {};
  }
}

function getExactNodeVersion(nodeVersionMajor) {
  if (IS_CI) {
    return process.version.replace(/^v/, '');
  }
  var result = runCommand('fnm exec --using=' + nodeVersionMajor + ' -- node --version');
  if (result.status === 0) {
    return result.stdout.trim().replace(/^v/, '');
  }
  return String(nodeVersionMajor) + '.x';
}

function generateSnapshot(entry) {
  const { angularMajor, cliVersion, nodeVersion } = entry;
  // Use a parent temp dir; ng new will create a 'ng-diff-app' subdirectory inside it
  const tmpParent = path.join(os.tmpdir(), 'ng-diff-tmp-' + angularMajor);
  const appDir = path.join(tmpParent, 'ng-diff-app');

  // Clean up any previous temp dir
  if (fs.existsSync(tmpParent)) fs.rmSync(tmpParent, { recursive: true, force: true });

  // Remove stale angular-cli.json / .angular-cli.json from os.tmpdir() root — old CLI
  // versions create these and ng new refuses to run if it finds a project above cwd.
  ['angular-cli.json', '.angular-cli.json', 'angular.json'].forEach(function(f) {
    var stale = path.join(os.tmpdir(), f);
    if (fs.existsSync(stale)) { fs.unlinkSync(stale); }
  });

  fs.mkdirSync(tmpParent);

  const isLegacyCli = cliVersion.startsWith('1.');
  const newFlags = isLegacyCli
    ? '--skip-git --skip-install'
    : '--defaults --skip-git --skip-install';

  let cmd;
  if (IS_CI) {
    // Node version already set by actions/setup-node; run ng new from tmpParent
    cmd = 'npx --yes @angular/cli@' + cliVersion + ' new ng-diff-app ' + newFlags;
  } else {
    // Use fnm exec to run with the correct Node version
    cmd = 'fnm exec --using=' + nodeVersion + ' -- npx --yes @angular/cli@' + cliVersion + ' new ng-diff-app ' + newFlags;
  }

  console.log('  [Angular ' + angularMajor + '] Running in ' + tmpParent + ': ' + cmd);
  const result = runCommand(cmd, { timeout: 300000, cwd: tmpParent });

  if (result.status !== 0) {
    console.error('  [Angular ' + angularMajor + '] FAILED (exit ' + result.status + ')');
    if (result.stderr) console.error('  STDERR: ' + result.stderr.slice(0, 1000));
    if (result.stdout) console.error('  STDOUT: ' + result.stdout.slice(0, 1000));
    return false;
  }

  if (!fs.existsSync(appDir)) {
    console.error('  [Angular ' + angularMajor + '] FAILED: app directory not found at ' + appDir);
    console.error('  stdout: ' + result.stdout.slice(0, 500));
    return false;
  }

  const files = collectFiles(appDir);
  const packageMeta = extractPackageMeta(files);
  const nodeVersionUsed = getExactNodeVersion(nodeVersion);

  const snapshot = {
    angularMajor,
    cliVersion,
    nodeVersion,
    nodeVersionUsed,
    nodeRange: entry.nodeRange,
    tsRange: entry.tsRange,
    rxjsRange: entry.rxjsRange,
    generatedAt: new Date().toISOString().split('T')[0],
    packageMeta,
    files,
  };

  const outDir = path.join(SNAPSHOTS_DIR, String(angularMajor));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'default.json'), JSON.stringify(snapshot, null, 2));

  // Clean up temp dir
  fs.rmSync(tmpParent, { recursive: true, force: true });

  console.log('  [Angular ' + angularMajor + '] Done. Files: ' + Object.keys(files).length);
  return true;
}

function updateVersionsIndex() {
  const entries = [];
  for (const entry of VERSION_MAP) {
    const snapshotPath = path.join(SNAPSHOTS_DIR, String(entry.angularMajor), 'default.json');
    if (!fs.existsSync(snapshotPath)) continue;
    const snapshot = JSON.parse(fs.readFileSync(snapshotPath, 'utf8'));
    entries.push({
      angularMajor: snapshot.angularMajor,
      cliVersion: snapshot.cliVersion,
      nodeVersion: snapshot.nodeVersion,
      nodeVersionUsed: snapshot.nodeVersionUsed || null,
      // Static ranges always sourced from VERSION_MAP (authoritative, not snapshot)
      nodeRange: entry.nodeRange,
      tsRange: entry.tsRange,
      rxjsRange: entry.rxjsRange,
      generatedAt: snapshot.generatedAt,
      packageMeta: snapshot.packageMeta,
    });
  }
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(VERSIONS_FILE, JSON.stringify(entries, null, 2));
  console.log('Updated versions.json with ' + entries.length + ' entries.');
}

async function main() {
  if (!IS_CI && !hasFnm()) {
    console.error('fnm is not installed. Install it from https://github.com/Schniz/fnm');
    process.exit(1);
  }

  fs.mkdirSync(SNAPSHOTS_DIR, { recursive: true });

  let successCount = 0;
  for (const major of targetMajors) {
    const entry = VERSION_MAP.find(e => e.angularMajor === major);
    if (!entry) { console.warn(`No entry for Angular major ${major}, skipping.`); continue; }
    console.log(`\nGenerating Angular ${major} (CLI ${entry.cliVersion}, Node ${entry.nodeVersion})...`);
    const ok = generateSnapshot(entry);
    if (ok) successCount++;
  }

  updateVersionsIndex();
  console.log(`\nDone. ${successCount}/${targetMajors.length} snapshots generated.`);
}

main().catch(err => { console.error(err); process.exit(1); });
