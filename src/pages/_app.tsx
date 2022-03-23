import { ApolloProvider } from '@apollo/client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';

import { globalStyles } from 'styles/GlobalStyle';
import apolloClient from 'utils/api/apollo-client';

const cache = createCache({ key: 'next' });

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  </ApolloProvider>
);

export default App;
