import { postsPageQuery } from 'queries/postsPageQuery.gql';
import apolloClient from 'utils/api/apollo-client';

interface GetPostsProps {
  category: string;
  limit?: number;
  locale: string;
  sort?: string;
}
const getPosts = async ({
  category,
  limit = 3,
  locale,
  sort = '',
}: GetPostsProps) => {
  const blogPostsResponse = await apolloClient.query({
    query: postsPageQuery,
    variables: {
      category,
      limit,
      locale,
      sort,
    },
  });

  return blogPostsResponse.data.posts || [];
};

export default getPosts;
