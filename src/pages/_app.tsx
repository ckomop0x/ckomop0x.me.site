import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import 'bootstrap/dist/css/bootstrap.css';

import { globalStyles } from "styles/GlobalStyle";

const cache = createCache({ key: 'next' })

import apolloClient from 'utils/api/apollo-client';


const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  </ApolloProvider>
);

export default App;
