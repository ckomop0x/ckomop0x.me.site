import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

/** @type {import('vite').UserConfig} */
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './test.setup.ts',
      include: ['src/**/*.(spec|test).[jt]s?(x)'],
      exclude: [
        '**/node_modules',
        'dist',
        'coverage',
        'postcss.config.js',
        'tailwind.config.js',
        'jest-preprocess.js',
        'jest-setup.js',
        'loadershim.js',
        'next.config.mjs',
        'postcss.config.mjs',
        '**/coverage',
        '**/codegen.ts',
      ],
      coverage: {
        provider: 'v8', // Use v8 for coverage
        reporter: ['text', 'json', 'lcov'], // Ensure JSON and LCOV formats for Codecov
        reportsDirectory: 'coverage', // Make sure Codecov can find reports here
        include: ['src/**/*.{ts,tsx,js,jsx}'],
      },
    },
  };
});
