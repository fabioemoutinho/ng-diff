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

// Node 8 compat: fs.mkdirSync({ recursive: true }) was added in Node 10.12
function mkdirSafe(dir) {
  try { fs.mkdirSync(dir); } catch (e) { if (e.code !== 'EEXIST') throw e; }
}

// --- Node version manager detection ---
// Supports: nvm-windows (direct binary path), fnm (exec), Unix nvm (exec).
// Falls back to current Node with a warning if no manager or version not installed.

function getNvmWindowsHome() {
  var nvmHome = process.env.NVM_HOME;
  if (nvmHome && fs.existsSync(path.join(nvmHome, 'nvm.exe'))) return nvmHome;
  // Fallback: check default Windows location
  var appdata = process.env.APPDATA || '';
  var candidate = path.join(appdata, 'nvm');
  if (fs.existsSync(path.join(candidate, 'nvm.exe'))) return candidate;
  return null;
}

function getNvmWindowsVersionDir(nvmHome, nodeVersionMajor) {
  var entries;
  try { entries = fs.readdirSync(nvmHome); } catch (e) { return null; }
  var match = entries.filter(function(d) { return /^v\d+\./.test(d); }).find(function(e) {
    return parseInt(e.replace('v', '').split('.')[0]) === nodeVersionMajor;
  });
  return match ? path.join(nvmHome, match) : null;
}

function hasFnm() {
  return runCommand('fnm --version').status === 0;
}

function hasNodeManager() {
  if (getNvmWindowsHome()) return true;
  if (hasFnm()) return true;
  return false;
}

// Build the npx command prefix for a given node major version.
// Returns { prefix: string, nodeExact: string } where prefix is prepended to npx invocation.
function resolveNodeCommand(nodeVersionMajor) {
  var currentMajor = parseInt(process.version.replace('v', '').split('.')[0]);
  var currentExact = process.version.replace(/^v/, '');

  // nvm-windows: call node/npx directly from the versioned directory
  var nvmHome = getNvmWindowsHome();
  if (nvmHome) {
    var versionDir = getNvmWindowsVersionDir(nvmHome, nodeVersionMajor);
    if (!versionDir) {
      console.warn('  [warn] nvm: Node ' + nodeVersionMajor + ' not installed. Run: nvm install ' + nodeVersionMajor);
      console.warn('  [warn] Falling back to current Node ' + process.version);
      return { nodeExe: 'node', npxCmd: 'npx', nodeExact: currentExact };
    }
    var nodeExe = '"' + path.join(versionDir, 'node.exe') + '"';
    var npxCmd = '"' + path.join(versionDir, 'npx.cmd') + '"';
    var versionResult = runCommand(nodeExe + ' --version');
    var nodeExact = versionResult.status === 0 ? versionResult.stdout.trim().replace(/^v/, '') : nodeVersionMajor + '.x';
    return { nodeExe: nodeExe, npxCmd: npxCmd, nodeExact: nodeExact };
  }

  // fnm
  if (hasFnm()) {
    var fnmResult = runCommand('fnm exec --using=' + nodeVersionMajor + ' -- node --version');
    var fnmExact = fnmResult.status === 0 ? fnmResult.stdout.trim().replace(/^v/, '') : nodeVersionMajor + '.x';
    return { nodeExe: null, npxCmd: null, fnmUsing: nodeVersionMajor, nodeExact: fnmExact };
  }

  // No manager — warn and use current Node
  if (currentMajor !== nodeVersionMajor) {
    console.warn('  [warn] No Node version manager found. Using current Node ' + process.version + ' (expected major ' + nodeVersionMajor + ').');
    console.warn('  [hint] Install nvm-windows: https://github.com/coreybutler/nvm-windows/releases');
  }
  return { nodeExe: 'node', npxCmd: 'npx', nodeExact: currentExact };
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
  if (IS_CI) return process.version.replace(/^v/, '');
  return resolveNodeCommand(nodeVersionMajor).nodeExact;
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

  var ngNewArgs = '--yes @angular/cli@' + cliVersion + ' new ng-diff-app ' + newFlags;
  var resolved = IS_CI ? null : resolveNodeCommand(nodeVersion);
  var cmd;
  if (IS_CI) {
    cmd = 'npx ' + ngNewArgs;
  } else if (resolved.fnmUsing !== undefined) {
    cmd = 'fnm exec --using=' + resolved.fnmUsing + ' -- npx ' + ngNewArgs;
  } else {
    cmd = resolved.npxCmd + ' ' + ngNewArgs;
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
  const nodeVersionUsed = IS_CI
    ? process.version.replace(/^v/, '')
    : (resolved ? resolved.nodeExact : process.version.replace(/^v/, ''));

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
  mkdirSafe(outDir);
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
  mkdirSafe(DATA_DIR);
  fs.writeFileSync(VERSIONS_FILE, JSON.stringify(entries, null, 2));
  console.log('Updated versions.json with ' + entries.length + ' entries.');
}

async function main() {
  if (!IS_CI && !hasNodeManager()) {
    console.warn('[warn] No Node version manager (nvm, fnm) found. Using current Node ' + process.version + ' for all versions.');
    console.warn('[hint] Install nvm-windows: https://github.com/coreybutler/nvm-windows/releases');
  }

  mkdirSafe(SNAPSHOTS_DIR);

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
