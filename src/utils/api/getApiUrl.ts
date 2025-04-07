export const getApiUrl = () => {
  const isDev = process?.env?.NODE_ENV === 'development';
  return isDev
    ? `${process.env.NEXT_PUBLIC_URL_LOCAL}`
    : `${process.env.NEXT_PUBLIC_URL}`;
};
