export const getApiUrl = () => {
  const isDev = process?.env?.NODE_ENV === 'development';
  const apiUrl = isDev
    ? `${process.env.NEXT_PUBLIC_URL_LOCAL}`
    : `${process.env.NEXT_PUBLIC_URL}`;

  return apiUrl;
};

export const getGraphQLUrl = () => {
  return `${getApiUrl()}/graphql`;
};
