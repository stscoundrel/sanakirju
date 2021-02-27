module.exports = {
  collectCoverageFrom: [
    'src/**',
  ],
  testEnvironment: 'node',
  verbose: false,
  setupFiles: [
    '<rootDir>/setupTests.ts',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/tests/integration/', '<rootDir>/tests/build/', '<rootDir>/node_modules/',
  ],
};
