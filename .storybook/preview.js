import './assets/bootstrap.min.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    theme: {
      brandTitle: 'Ckomop0x.me'
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
