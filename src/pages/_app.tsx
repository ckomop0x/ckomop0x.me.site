import { ApolloProvider } from '@apollo/client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { Neucha } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';

import { globalStyles } from 'styles/GlobalStyle';
import apolloClient from 'utils/api/apollo-client';

const cache = createCache({ key: 'next' });
const neucha = Neucha({
  subsets: ['cyrillic', 'latin'],
  weight: '400',
  variable: '--font-secondary',
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <main className={neucha.variable}>
      <CacheProvider value={cache}>
        {globalStyles}
        <Component {...pageProps} />
      </CacheProvider>
    </main>
  </ApolloProvider>
);

export default App;
