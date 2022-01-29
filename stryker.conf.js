/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress'],
  jest: {
    projectType: 'custom',
    configFile: 'jest.config.stryker.ts',
  },
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  tsconfigFile: 'tsconfig.json',
  thresholds: { high: 70, low: 50, break: 60 },
};
