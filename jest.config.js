module.exports = {
  preset: 'react-native',
  setupFiles: ['./__tests__/setup.js'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!src/localization/**',
    '!src/navigation/**', // Exclude navigation directory
    '!src/index.tsx',
    '!src/data/api/index.ts',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-redux|react-native-dropdown-picker|@react-native-async-storage/async-storage)/)',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
