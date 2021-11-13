import { ApolloClient, InMemoryCache } from '@apollo/client';
const isDev = process?.env?.NODE_ENV === 'development';
const graphQLUrl = isDev
  ? process.env.NEXT_PUBLIC_STRAPI_URL_LOCAL
  : process.env.NEXT_PUBLIC_STRAPI_URL;

const apolloClient = new ApolloClient({
  uri: graphQLUrl,
  cache: new InMemoryCache(),
});

export default apolloClient;
