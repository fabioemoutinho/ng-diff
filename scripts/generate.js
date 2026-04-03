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

// Node 14 compat: fs.rmSync({ recursive, force }) was added in Node 14.14
function rmRecursive(dir) {
  if (!fs.existsSync(dir)) return;
  var entries = fs.readdirSync(dir, { withFileTypes: true });
  for (var i = 0; i < entries.length; i++) {
    var full = path.join(dir, entries[i].name);
    if (entries[i].isDirectory()) { rmRecursive(full); } else { fs.unlinkSync(full); }
  }
  fs.rmdirSync(dir);
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

// Returns a descriptor for running commands with a specific node major.
// Throws if the required version is not installed — no fallbacks.
//
// nvm-windows: { type:'nvm-windows', nodeExe, npmCli, nodeExact }
//        fnm:  { type:'fnm', fnmUsing, nodeExact }
function resolveNodeCommand(nodeVersionMajor) {
  var nvmHome = getNvmWindowsHome();
  if (nvmHome) {
    var versionDir = getNvmWindowsVersionDir(nvmHome, nodeVersionMajor);
    if (!versionDir) {
      throw new Error(
        'Node ' + nodeVersionMajor + ' is not installed in nvm.\n' +
        'Run: nvm install ' + nodeVersionMajor
      );
    }
    // Node 8 on nvm-windows installs node64.exe instead of node.exe
    var nodeExeName = fs.existsSync(path.join(versionDir, 'node.exe')) ? 'node.exe' : 'node64.exe';
    var nodeExe = '"' + path.join(versionDir, nodeExeName) + '"';
    var npmCli = '"' + path.join(versionDir, 'node_modules', 'npm', 'bin', 'npm-cli.js') + '"';
    var versionResult = runCommand(nodeExe + ' --version');
    if (versionResult.status !== 0) {
      throw new Error('Failed to query version from ' + nodeExe + ': ' + versionResult.stderr);
    }
    return {
      type: 'nvm-windows',
      nodeExe: nodeExe,
      npmCli: npmCli,
      nodeExact: versionResult.stdout.trim().replace(/^v/, ''),
    };
  }

  if (hasFnm()) {
    var fnmCheck = runCommand('fnm exec --using=' + nodeVersionMajor + ' -- node --version');
    if (fnmCheck.status !== 0) {
      throw new Error(
        'Node ' + nodeVersionMajor + ' is not installed in fnm.\n' +
        'Run: fnm install ' + nodeVersionMajor
      );
    }
    return { type: 'fnm', fnmUsing: nodeVersionMajor, nodeExact: fnmCheck.stdout.trim().replace(/^v/, '') };
  }

  throw new Error(
    'No Node version manager found (nvm-windows or fnm).\n' +
    'Install nvm-windows: https://github.com/coreybutler/nvm-windows/releases'
  );
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

function buildDeps(files, entry, nodeVersionUsed) {
  var pkg = {};
  try { pkg = JSON.parse(files['package.json'] || '{}'); } catch (e) {}
  var allDeps = {};
  if (pkg.dependencies) Object.assign(allDeps, pkg.dependencies);
  if (pkg.devDependencies) Object.assign(allDeps, pkg.devDependencies);
  function cleanVer(v) { return v ? v.replace(/[\^~>=<]/g, '').split(' ')[0] : null; }
  var cliRange = entry.cliVersion.startsWith('1.') ? '^1.0.0' : '^' + entry.angularMajor + '.0.0';
  return {
    angular:    { version: cleanVer(allDeps['@angular/core']) },
    cli:        { version: entry.cliVersion, supported: cliRange },
    node:       { version: nodeVersionUsed, supported: entry.nodeRange },
    typescript: { version: cleanVer(allDeps['typescript']), supported: entry.tsRange },
    rxjs:       { version: cleanVer(allDeps['rxjs']), supported: entry.rxjsRange },
  };
}

function generateSnapshot(entry) {
  const { angularMajor, cliVersion, nodeVersion } = entry;
  // Use a parent temp dir; ng new will create a 'ng-diff-app' subdirectory inside it
  const tmpParent = path.join(os.tmpdir(), 'ng-diff-tmp-' + angularMajor);
  const appDir = path.join(tmpParent, 'ng-diff-app');

  // Clean up any previous temp dir
  if (fs.existsSync(tmpParent)) rmRecursive(tmpParent);

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

  var resolved;
  if (!IS_CI) {
    try {
      resolved = resolveNodeCommand(nodeVersion);
    } catch (e) {
      console.error('  [Angular ' + angularMajor + '] SKIPPED: ' + e.message);
      return false;
    }
  }

  // Build install + ng-new commands based on the resolver type.
  // nvm-windows / CI: old npx is unreliable across npm versions, so install CLI via npm
  //                   then call ng binary directly.
  // fnm:              npx handles everything cleanly.
  var installCmd = null;
  var cmd;
  if (IS_CI) {
    installCmd = 'npm install @angular/cli@' + cliVersion + ' --no-save --prefix .';
    cmd = 'node node_modules/@angular/cli/bin/ng new ng-diff-app ' + newFlags;
  } else if (resolved.type === 'nvm-windows') {
    installCmd = resolved.nodeExe + ' ' + resolved.npmCli +
      ' install @angular/cli@' + cliVersion + ' --no-save --prefix .';
    cmd = resolved.nodeExe + ' node_modules/@angular/cli/bin/ng new ng-diff-app ' + newFlags;
  } else {
    cmd = 'fnm exec --using=' + resolved.fnmUsing +
      ' -- npx --yes @angular/cli@' + cliVersion + ' new ng-diff-app ' + newFlags;
  }

  if (installCmd) {
    console.log('  [Angular ' + angularMajor + '] Installing CLI ' + cliVersion + '...');
    var installResult = runCommand(installCmd, { timeout: 120000, cwd: tmpParent });
    if (installResult.status !== 0) {
      console.error('  [Angular ' + angularMajor + '] CLI install FAILED');
      if (installResult.stderr) console.error('  STDERR: ' + installResult.stderr.slice(0, 500));
      return false;
    }
  }

  console.log('  [Angular ' + angularMajor + '] Running: ' + cmd);
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
  const nodeVersionUsed = IS_CI
    ? process.version.replace(/^v/, '')
    : (resolved ? resolved.nodeExact : process.version.replace(/^v/, ''));

  const snapshot = {
    angularMajor,
    generatedAt: new Date().toISOString().split('T')[0],
    deps: buildDeps(files, entry, nodeVersionUsed),
    files,
  };

  const outDir = path.join(SNAPSHOTS_DIR, String(angularMajor));
  mkdirSafe(outDir);
  fs.writeFileSync(path.join(outDir, 'default.json'), JSON.stringify(snapshot, null, 2));

  // Clean up temp dir
  rmRecursive(tmpParent);

  console.log('  [Angular ' + angularMajor + '] Done. Files: ' + Object.keys(files).length);
  return true;
}

function updateVersionsIndex() {
  const entries = [];
  for (const entry of VERSION_MAP) {
    const snapshotPath = path.join(SNAPSHOTS_DIR, String(entry.angularMajor), 'default.json');
    if (!fs.existsSync(snapshotPath)) continue;
    const snapshot = JSON.parse(fs.readFileSync(snapshotPath, 'utf8'));
    var cliRange = entry.cliVersion.startsWith('1.') ? '^1.0.0' : '^' + entry.angularMajor + '.0.0';
    // Support both new (deps) and old (packageMeta) snapshot formats
    var deps = snapshot.deps || {};
    var pm = snapshot.packageMeta || {};
    entries.push({
      angularMajor: snapshot.angularMajor,
      generatedAt: snapshot.generatedAt,
      deps: {
        angular:    { version: (deps.angular && deps.angular.version) || pm.angularVersion || null },
        cli:        { version: entry.cliVersion, supported: cliRange },
        node:       { version: (deps.node && deps.node.version) || snapshot.nodeVersionUsed || null, supported: entry.nodeRange },
        typescript: { version: (deps.typescript && deps.typescript.version) || pm.typescriptVersion || null, supported: entry.tsRange },
        rxjs:       { version: (deps.rxjs && deps.rxjs.version) || pm.rxjsVersion || null, supported: entry.rxjsRange },
      },
    });
  }
  mkdirSafe(DATA_DIR);
  fs.writeFileSync(VERSIONS_FILE, JSON.stringify(entries, null, 2));
  console.log('Updated versions.json with ' + entries.length + ' entries.');
}

async function main() {
  if (!IS_CI && !hasNodeManager()) {
    console.error('No Node version manager found (nvm-windows or fnm).');
    console.error('Install nvm-windows: https://github.com/coreybutler/nvm-windows/releases');
    process.exit(1);
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
