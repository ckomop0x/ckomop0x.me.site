import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import apolloClient from 'utils/api/apollo-client';

import 'bootstrap/dist/css/bootstrap.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={{}}>
      <Component {...pageProps} />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
