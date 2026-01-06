import { fileURLToPath } from "node:url";
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-themes',
    '@storybook/addon-docs',
  ],

  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          /**
           * Map our module path aliases, so that Storybook can understand modules loaded using "@/common" and load the proper file.
           * Required, or Storybook will fail to import dependencies from Stories.
           *
           * XXX The below list must match `tsconfig.json:compilerOptions.paths`, so the Next.js app and Storybook resolve all aliases the same way.
           *  The paths mapping must also match the `jsconfig.json:compilerOptions.paths` file, which is necessary for WebStorm to understand them for .js files.
           *
           * @see https://nextjs.org/docs/advanced-features/module-path-aliases
           * @see https://intellij-support.jetbrains.com/hc/en-us/community/posts/360003361399/comments/360002636080
           */
          components: path.resolve(__dirname, '../src/components'),
          utils: path.resolve(__dirname, '../src/utils'),
          styles: path.resolve(__dirname, '../src/styles'),
        },
      },
    };
  },

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
};
