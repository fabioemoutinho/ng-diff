#!/usr/bin/env node
/**
 * build-matrix.js
 *
 * Reads VERSION_MAP and outputs a GitHub Actions matrix JSON that groups
 * Angular majors by their required Node version.
 *
 * Usage:
 *   node scripts/build-matrix.js                         # all versions
 *   node scripts/build-matrix.js --versions '[20,21,22]' # filter to specific majors
 *
 * Output (to GITHUB_OUTPUT in CI, stdout locally):
 *   matrix={"include":[{"node-version":8,"angular-majors":"[4,5,6]"},...]};
 */

const fs = require('fs');
const { VERSION_MAP } = require('./version-map');

const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(name);
  return idx !== -1 ? args[idx + 1] : null;
}

const versionsArg = getArg('--versions');
const filter = versionsArg ? JSON.parse(versionsArg) : [];
const entries = filter.length > 0
  ? VERSION_MAP.filter(e => filter.includes(e.angularMajor))
  : VERSION_MAP;

// Group by nodeVersion, preserving insertion order (ascending by nodeVersion)
const groups = {};
for (const e of entries) {
  if (!groups[e.nodeVersion]) groups[e.nodeVersion] = [];
  groups[e.nodeVersion].push(e.angularMajor);
}

const matrix = {
  include: Object.entries(groups)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([nodeVersion, majors]) => ({
      'node-version': Number(nodeVersion),
      'angular-majors': JSON.stringify(majors),
    })),
};

const output = JSON.stringify(matrix);

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `matrix=${output}\n`);
}

console.log(output);
