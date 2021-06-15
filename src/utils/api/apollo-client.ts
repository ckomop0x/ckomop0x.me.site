import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://ckme-admin.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
