module.exports = {
  preset: 'jest-expo',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jestSetup.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|expo' +
      '|expo-router' +
      '|expo-modules-core' +
      '|expo-constants' +
      '|react-native-screens' +
      '|react-native-safe-area-context' +
      ')/)',
  ],
};
