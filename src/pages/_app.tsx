import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import apolloClient from 'utils/api/apollo-client';

export default function WebtimeApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
