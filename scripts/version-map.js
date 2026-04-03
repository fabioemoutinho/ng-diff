/**
 * Static mapping of Angular major versions to the CLI version, Node version,
 * and TypeScript range used to generate ng-diff snapshots.
 *
 * Rules:
 * - One entry per Angular major version
 * - angularVersion: latest minor.patch of that major
 * - cliVersion: latest CLI patch compatible with that Angular minor
 * - nodeVersion: highest Node major in the supported range
 * - tsRange: TypeScript range from angular.dev/reference/versions
 */

/** @type {Array<{angularMajor: number, angularVersion: string, cliVersion: string, nodeVersion: number, tsRange: string}>} */
const VERSION_MAP = [
  { angularMajor: 4,  angularVersion: '4.4.7',   cliVersion: '1.4.10',  nodeVersion: 8,  tsRange: '>=2.1.6 <2.5.0' },
  { angularMajor: 5,  angularVersion: '5.2.11',  cliVersion: '1.7.4',   nodeVersion: 8,  tsRange: '>=2.4.2 <2.7.0' },
  { angularMajor: 6,  angularVersion: '6.1.10',  cliVersion: '6.2.9',   nodeVersion: 8,  tsRange: '>=2.7.2 <3.0.0' },
  { angularMajor: 7,  angularVersion: '7.2.16',  cliVersion: '7.3.10',  nodeVersion: 10, tsRange: '>=3.1.3 <3.3.0' },
  { angularMajor: 8,  angularVersion: '8.2.14',  cliVersion: '8.3.29',  nodeVersion: 10, tsRange: '>=3.4.2 <3.6.0' },
  { angularMajor: 9,  angularVersion: '9.1.13',  cliVersion: '9.1.15',  nodeVersion: 12, tsRange: '>=3.6.0 <3.9.0' },
  { angularMajor: 10, angularVersion: '10.2.5',  cliVersion: '10.2.4',  nodeVersion: 12, tsRange: '>=3.9.0 <4.1.0' },
  { angularMajor: 11, angularVersion: '11.2.14', cliVersion: '11.2.19', nodeVersion: 12, tsRange: '>=4.0.0 <4.2.0' },
  { angularMajor: 12, angularVersion: '12.2.17', cliVersion: '12.2.18', nodeVersion: 14, tsRange: '>=4.2.3 <4.4.0' },
  { angularMajor: 13, angularVersion: '13.3.12', cliVersion: '13.3.11', nodeVersion: 16, tsRange: '>=4.4.3 <4.7.0' },
  { angularMajor: 14, angularVersion: '14.3.0',  cliVersion: '14.2.13', nodeVersion: 16, tsRange: '>=4.6.2 <4.9.0' },
  { angularMajor: 15, angularVersion: '15.2.10', cliVersion: '15.2.11', nodeVersion: 18, tsRange: '>=4.8.2 <5.0.0' },
  { angularMajor: 16, angularVersion: '16.2.12', cliVersion: '16.2.16', nodeVersion: 18, tsRange: '>=4.9.3 <5.2.0' },
  { angularMajor: 17, angularVersion: '17.3.12', cliVersion: '17.3.17', nodeVersion: 20, tsRange: '>=5.2.0 <5.5.0' },
  { angularMajor: 18, angularVersion: '18.2.13', cliVersion: '18.2.21', nodeVersion: 20, tsRange: '>=5.4.0 <5.6.0' },
  { angularMajor: 19, angularVersion: '19.2.14', cliVersion: '19.2.23', nodeVersion: 20, tsRange: '>=5.5.0 <5.9.0' },
  { angularMajor: 20, angularVersion: '20.3.14', cliVersion: '20.3.22', nodeVersion: 20, tsRange: '>=5.8.0 <6.0.0' },
  { angularMajor: 21, angularVersion: '21.2.6',  cliVersion: '21.2.6',  nodeVersion: 20, tsRange: '>=5.9.0 <6.0.0' },
];

module.exports = { VERSION_MAP };
