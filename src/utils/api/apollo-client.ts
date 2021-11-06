import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  // uri: 'https://ckme-admin.herokuapp.com/graphql',
  uri: 'http://localhost:9024/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
