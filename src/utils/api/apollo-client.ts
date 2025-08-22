import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { getGraphQLUrl } from '@/utils/api/getGraphQLUrl';

const graphQLUrl = getGraphQLUrl();

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: graphQLUrl }),
  cache: new InMemoryCache(),
});

export default apolloClient;
