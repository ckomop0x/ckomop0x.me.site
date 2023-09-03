const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFiles: ['<rootDir>/loadershim.js'],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['node_modules', '.cache', 'index.ts'],
  moduleNameMapper: {
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^config/(.*)': '<rootDir>/src/config/$1',
    '^styles/(.*)': '<rootDir>/src/styles/$1',
    '^utils/(.*)': '<rootDir>/src/utils/$1',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
  },
  testEnvironment: 'jest-environment-jsdom',
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

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
