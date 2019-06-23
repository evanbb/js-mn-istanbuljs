module.exports = {
  testMatch: [
    '<rootDir>/e2e/**/?(*.)(spec|test).js'
  ],
  transform: {
    '^.+\\.js$': require.resolve('react-scripts/config/jest/babelTransform.js')
  }
};
