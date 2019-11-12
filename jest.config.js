module.exports = {
  automock: false,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '.d.ts$'],
  cacheDirectory: '.jest/cache',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.(ts|tsx|js)'],
  coveragePathIgnorePatterns: ['__fixtures__', '/coverage/', 'index.ts'],
}
