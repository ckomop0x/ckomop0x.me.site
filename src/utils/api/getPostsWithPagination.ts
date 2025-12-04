import { Post } from '@/queries/__generated__/graphql';
import { postsWithPaginationQuery } from '@/queries/postsWithPaginationQuery.gql';
import apolloClient from '@/utils/api/apollo-client';
import { PaginationInfo } from '@/utils/pagination';

interface GetPostsWithPaginationProps {
  category: string;
  page: number;
  pageSize: number;
  locale: string;
  sort?: string;
}

interface GetPostsWithPaginationResult {
  posts: Post[];
  pagination: PaginationInfo;
}

const getPostsWithPagination = async ({
  category,
  page = 1,
  pageSize = 6,
  locale,
  sort = '',
}: GetPostsWithPaginationProps): Promise<GetPostsWithPaginationResult> => {
  const response = await apolloClient.query({
    query: postsWithPaginationQuery,
    variables: {
      category,
      page,
      pageSize,
      locale,
      sort: sort ? [sort] : undefined,
    },
  });

  // @ts-expect-error
  const { nodes: posts, pageInfo } = response.data.posts_connection;

  return {
    posts: posts || [],
    pagination: {
      total: pageInfo.total,
      page: pageInfo.page,
      pageSize: pageInfo.pageSize,
      pageCount: pageInfo.pageCount,
    },
  };
};

export default getPostsWithPagination;
