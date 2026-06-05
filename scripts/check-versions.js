#!/usr/bin/env node
/**
 * check-versions.js
 *
 * 1. Fetches all published @angular/cli versions from npm.
 * 2. Detects new Angular major versions not yet in version-map.js and
 *    auto-appends them (node/ts/rxjs requirements derived from npm metadata).
 * 3. Updates cliVersion in version-map.js for existing entries when npm has
 *    a newer patch/minor.
 * 4. Writes version-map.js back if anything changed.
 * 5. Compares updated version-map against data/versions.json to find which
 *    majors need (re)generation, and outputs versions_to_update.
 *
 * Usage: node scripts/check-versions.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { VERSION_MAP } = require('./version-map');

const VERSION_MAP_FILE = path.join(__dirname, 'version-map.js');
const VERSIONS_FILE = path.join(__dirname, '../data/versions.json');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'ng-diff-checker/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

/**
 * Find the latest stable CLI version for a given Angular major.
 * CLI 1.x (Angular 4-5): search within the same minor (shared CLI major 1).
 * CLI 6+: search the entire major.
 */
function findLatestForMajor(angularMajor, baseCliVersion, allVersions) {
  let prefix;
  if (String(baseCliVersion).startsWith('1.')) {
    const [maj, min] = String(baseCliVersion).split('.');
    prefix = `${maj}.${min}.`;
  } else {
    prefix = `${angularMajor}.`;
  }
  const matching = allVersions
    .filter(v => v.startsWith(prefix))
    .sort((a, b) => {
      const pa = a.split('.').map(Number);
      const pb = b.split('.').map(Number);
      for (let i = 0; i < 3; i++) if (pa[i] !== pb[i]) return pa[i] - pb[i];
      return 0;
    });
  return matching[matching.length - 1] || null;
}

/** Parse a node engines range string and return the highest major version number. */
function maxNodeMajor(nodeRange) {
  const majors = [...nodeRange.matchAll(/\b(\d+)\.\d+/g)].map(m => parseInt(m[1], 10));
  return majors.length ? Math.max(...majors) : 0;
}

/**
 * Build a new VERSION_MAP entry for an undiscovered Angular major by fetching
 * metadata from npm:
 *   - @angular/cli        → engines.node (nodeRange, nodeVersion)
 *   - @angular/core       → peerDependencies.rxjs (rxjsRange)
 *   - @angular/compiler-cli → peerDependencies.typescript (tsRange)
 */
async function buildNewEntry(angularMajor, cliVersion) {
  console.error(`Fetching @angular/cli@${cliVersion} metadata...`);
  const cliPkg = await fetchJson(`https://registry.npmjs.org/@angular/cli/${cliVersion}`);
  const nodeRange = (cliPkg.engines && cliPkg.engines.node) || '';
  const nodeVersion = nodeRange ? maxNodeMajor(nodeRange) : 0;

  if (!nodeVersion) {
    console.error(`Angular ${angularMajor}: could not determine nodeVersion from engines.node="${nodeRange}", skipping.`);
    return null;
  }

  console.error(`Fetching @angular/core npm data for Angular ${angularMajor}...`);
  const coreIndex = await fetchJson('https://registry.npmjs.org/@angular/core');
  const allCoreVersions = Object.keys(coreIndex.versions).filter(v => !v.includes('-'));
  const coreVersion = findLatestForMajor(angularMajor, `${angularMajor}.0.0`, allCoreVersions);

  let angularVersion = `${angularMajor}.0.0`;
  let tsRange = '';
  let rxjsRange = '';

  if (coreVersion) {
    angularVersion = coreVersion;
    const corePkg = coreIndex.versions[coreVersion] || {};
    rxjsRange = (corePkg.peerDependencies || {}).rxjs || '';

    const compilerCliPkg = await fetchJson(`https://registry.npmjs.org/@angular/compiler-cli/${coreVersion}`);
    tsRange = (compilerCliPkg.peerDependencies || {}).typescript || '';
  }

  return { angularMajor, angularVersion, cliVersion, nodeVersion, nodeRange, tsRange, rxjsRange };
}

function serializeVersionMap(entries) {
  const rows = entries.map(e =>
    `{ angularMajor: ${e.angularMajor}, angularVersion: '${e.angularVersion}', cliVersion: '${e.cliVersion}', nodeVersion: ${e.nodeVersion}, nodeRange: '${e.nodeRange}', tsRange: '${e.tsRange}', rxjsRange: '${e.rxjsRange}' }`);

  return `/**
 * Static mapping of Angular major versions to the CLI version, Node version,
 * and compatibility ranges used to generate ng-diff snapshots.
 *
 * Rules:
 * - One entry per Angular major version
 * - angularVersion: latest minor.patch of that major
 * - cliVersion: latest CLI patch compatible with that Angular minor
 * - nodeVersion: highest Node major in the supported range (used for CI matrix + local fnm)
 * - nodeRange: full supported Node range string from angular.dev/reference/versions
 * - tsRange: TypeScript range from angular.dev/reference/versions
 * - rxjsRange: RxJS range from angular.dev/reference/versions
 */

/** @type {Array<{angularMajor: number, angularVersion: string, cliVersion: string, nodeVersion: number, nodeRange: string, tsRange: string, rxjsRange: string}>} */
const VERSION_MAP = [
${rows.map(r => '  ' + r).join(',\n')},
];

module.exports = { VERSION_MAP };
`;
}

async function main() {
  let generated = [];
  if (fs.existsSync(VERSIONS_FILE)) {
    generated = JSON.parse(fs.readFileSync(VERSIONS_FILE, 'utf8'));
  }

  const generatedMap = Object.fromEntries(
    generated.map(e => [e.angularMajor, e.deps && e.deps.cli ? e.deps.cli.version : null])
  );

  const npmData = await fetchJson('https://registry.npmjs.org/@angular/cli');
  const allCliVersions = Object.keys(npmData.versions).filter(v => !v.includes('-'));

  const maxNpmMajor = Math.max(...allCliVersions.map(v => parseInt(v.split('.')[0], 10)));
  const maxKnownMajor = Math.max(...VERSION_MAP.map(e => e.angularMajor));

  const updatedMap = VERSION_MAP.map(e => ({ ...e }));
  let mapChanged = false;

  // Auto-discover new major versions
  for (let major = maxKnownMajor + 1; major <= maxNpmMajor; major++) {
    const latestCli = findLatestForMajor(major, `${major}.0.0`, allCliVersions);
    if (!latestCli) continue;
    console.error(`New Angular major detected: ${major} (latest CLI: ${latestCli})`);
    const entry = await buildNewEntry(major, latestCli);
    if (entry) {
      updatedMap.push(entry);
      mapChanged = true;
      console.error(`Added Angular ${major} to version-map.js`);
    }
  }

  // Update cliVersion for existing entries when npm has a newer patch/minor
  for (const entry of updatedMap) {
    const latest = findLatestForMajor(entry.angularMajor, entry.cliVersion, allCliVersions);
    if (latest && latest !== entry.cliVersion) {
      console.error(`Angular ${entry.angularMajor}: cliVersion ${entry.cliVersion} → ${latest}`);
      entry.cliVersion = latest;
      mapChanged = true;
    }
  }

  if (mapChanged) {
    fs.writeFileSync(VERSION_MAP_FILE, serializeVersionMap(updatedMap));
    console.error('version-map.js updated.');
  }

  // Determine which versions need (re)generation by comparing against versions.json
  const currentMap = mapChanged ? updatedMap : VERSION_MAP;
  const needsUpdate = currentMap
    .filter(e => {
      const current = generatedMap[e.angularMajor];
      if (current !== e.cliVersion) {
        console.error(`Angular ${e.angularMajor}: generated=${current || 'none'}, latest=${e.cliVersion}`);
        return true;
      }
      return false;
    })
    .map(e => e.angularMajor);

  const output = JSON.stringify(needsUpdate);

  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `versions_to_update=${output}\n`);
  }

  console.log(output);
}

main().catch(err => { console.error(err); process.exit(1); });
