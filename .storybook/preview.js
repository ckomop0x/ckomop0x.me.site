import '../src/styles/globals.css';

import { withThemeByClassName } from "@storybook/addon-themes";

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    theme: {
      brandTitle: 'Ckomop0x.me',
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [withThemeByClassName({
    themes: {
        // nameOfTheme: 'classNameForTheme',
        light: '',
        dark: 'dark',
    },
    defaultTheme: 'light',
})];
export const tags = ['autodocs'];
