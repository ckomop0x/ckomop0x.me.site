import { ApolloProvider } from '@apollo/client';
import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { Neucha } from '@next/font/google';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';

import { globalStyles } from 'styles/GlobalStyle';
import { theme } from 'theme/theme';
import apolloClient from 'utils/api/apollo-client';

const cache = createCache({ key: 'next' });
const neucha = Neucha({
  weight: '400',
  variable: '--font-secondary',
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <main className={neucha.variable}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          {globalStyles}
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </main>
  </ApolloProvider>
);

export default App;
