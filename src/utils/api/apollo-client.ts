import { ApolloClient, InMemoryCache } from '@apollo/client';

import { getGraphQLUrl } from '@/utils/api/getApiUrl';

const graphQLUrl = getGraphQLUrl();

const apolloClient = new ApolloClient({
  uri: graphQLUrl,
  cache: new InMemoryCache(),
});

export default apolloClient;
