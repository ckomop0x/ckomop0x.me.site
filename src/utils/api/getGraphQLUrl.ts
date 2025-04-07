import { getApiUrl } from '@/utils/api/getApiUrl';

export const getGraphQLUrl = () => {
  return `${getApiUrl()}/graphql`;
};
