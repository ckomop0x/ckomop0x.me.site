import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { Neucha, Roboto } from 'next/font/google';
import '../styles/globals.css';

import apolloClient from 'utils/api/apollo-client';

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

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <main className={`${neucha.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </main>
  </ApolloProvider>
);

export default App;
