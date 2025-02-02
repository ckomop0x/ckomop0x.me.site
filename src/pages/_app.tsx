import { ApolloProvider } from '@apollo/client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { Neucha, Roboto } from 'next/font/google';
// import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import apolloClient from 'utils/api/apollo-client';

const cache = createCache({ key: 'next' });
const neucha = Neucha({
  subsets: ['cyrillic', 'latin'],
  weight: '400',
  variable: '--font-secondary',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-primary',
});

console.log('roboto ---->', roboto);
console.log('neucha ---->', neucha);

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <CacheProvider value={cache}>
      <main className={`${neucha.variable} ${roboto.variable}`}>
        <Component {...pageProps} />
      </main>
    </CacheProvider>
  </ApolloProvider>
);

export default App;
