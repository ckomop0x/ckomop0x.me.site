module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': '<rootDir>/jest-preprocess.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^config/(.*)': '<rootDir>/src/config/$1',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^utils/(.*)': '<rootDir>/src/utils/$1',
    '^styles/(.*)': '<rootDir>/src/styles/$1',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
  },
  testPathIgnorePatterns: ['node_modules', '.cache', 'index.ts'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  setupFiles: ['<rootDir>/loadershim.js'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'html'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/__generated__/**',
    '!**/*.module.scss.d.ts',
    '!**/vendor/**',
    '!**/mocks/**',
    '!**/.cache/**',
    '!**/public/**',
  ],
};
