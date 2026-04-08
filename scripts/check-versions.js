#!/usr/bin/env node
/**
 * check-versions.js
 *
 * Compares the CLI versions in version-map.js against what's already generated
 * in data/versions.json. Outputs a JSON array of Angular major version numbers
 * that need (re)generation.
 *
 * In GitHub Actions, writes the result to GITHUB_OUTPUT.
 * Locally, prints to stdout.
 *
 * Usage: node scripts/check-versions.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { VERSION_MAP } = require('./version-map');

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
 * Find the latest stable CLI version for a VERSION_MAP entry from a
 * pre-fetched list of all published versions.
 *
 * CLI 1.x (Angular 4-5): search within the same minor (1.4.x, 1.7.x)
 *   because both Angular 4 and 5 share CLI major 1.
 * CLI 6+  (Angular 6+):  search the entire major (CLI major = Angular major)
 *   so new minor versions (e.g. 19.3.0) are detected automatically.
 */
function findLatestCli(entry, allVersions) {
  const cv = entry.cliVersion;
  let prefix;
  if (cv.startsWith('1.')) {
    const [maj, min] = cv.split('.');
    prefix = `${maj}.${min}.`;
  } else {
    prefix = `${entry.angularMajor}.`;
  }
  const matching = allVersions
    .filter(v => v.startsWith(prefix))
    .sort((a, b) => {
      const pa = a.split('.').map(Number);
      const pb = b.split('.').map(Number);
      for (let i = 0; i < 3; i++) if (pa[i] !== pb[i]) return pa[i] - pb[i];
      return 0;
    });
  return matching[matching.length - 1] || cv;
}

async function main() {
  let generated = [];
  if (fs.existsSync(VERSIONS_FILE)) {
    generated = JSON.parse(fs.readFileSync(VERSIONS_FILE, 'utf8'));
  }

  const generatedMap = Object.fromEntries(
    generated.map(e => [e.angularMajor, e.deps && e.deps.cli ? e.deps.cli.version : null])
  );

  // Fetch all published CLI versions from npm once (instead of per-entry)
  const npmData = await fetchJson('https://registry.npmjs.org/@angular/cli');
  const allVersions = Object.keys(npmData.versions).filter(v => !v.includes('-'));

  const needsUpdate = [];

  for (const entry of VERSION_MAP) {
    const latestCli = findLatestCli(entry, allVersions);
    const currentCli = generatedMap[entry.angularMajor];
    if (currentCli !== latestCli) {
      console.error('Angular ' + entry.angularMajor + ': generated=' + (currentCli || 'none') + ', latest=' + latestCli);
      needsUpdate.push(entry.angularMajor);
    }
  }

  const output = JSON.stringify(needsUpdate);

  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `versions_to_update=${output}\n`);
  }

  console.log(output);
}

main().catch(err => { console.error(err); process.exit(1); });
