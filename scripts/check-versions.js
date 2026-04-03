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

async function getLatestCliPatch(cliVersion) {
  const [major, minor] = cliVersion.split('.');
  const prefix = `${major}.${minor}.`;
  try {
    const data = await fetchJson(`https://registry.npmjs.org/@angular/cli`);
    const matching = Object.keys(data.versions)
      .filter(v => v.startsWith(prefix) && !v.includes('-'))
      .sort((a, b) => {
        const pa = a.split('.').map(Number);
        const pb = b.split('.').map(Number);
        for (let i = 0; i < 3; i++) if (pa[i] !== pb[i]) return pa[i] - pb[i];
        return 0;
      });
    return matching[matching.length - 1] || cliVersion;
  } catch {
    return cliVersion;
  }
}

async function main() {
  let generated = [];
  if (fs.existsSync(VERSIONS_FILE)) {
    generated = JSON.parse(fs.readFileSync(VERSIONS_FILE, 'utf8'));
  }

  const generatedMap = Object.fromEntries(generated.map(e => [e.angularMajor, e.cliVersion]));
  const needsUpdate = [];

  for (const entry of VERSION_MAP) {
    const latestCli = await getLatestCliPatch(entry.cliVersion);
    const currentCli = generatedMap[entry.angularMajor];
    if (currentCli !== latestCli) {
      console.error(`Angular ${entry.angularMajor}: generated=${currentCli ?? 'none'}, latest=${latestCli}`);
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
