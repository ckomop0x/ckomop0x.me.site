import PostsList from '@/components/PostsList';
import Pagination from '@/components/ui/Pagination';
import { poetryPageQuery } from '@/queries/poetryPageQuery.gql';
import { TitleBlock } from '@/styles';
import apolloClient from '@/utils/api/apollo-client';
import getPostsWithPagination from '@/utils/api/getPostsWithPagination';
import { getSEOMetadata } from '@/utils/seo/getSEOMetadata';

const EMPTY_PAGE_MESSAGE = 'Здесь ещё ничего нет или что-то пошло не так. 😎';

export const revalidate = 10;

export const generateMetadata = async () => {
  const { data: poetryPageResponse } = await apolloClient.query({
    query: poetryPageQuery,
  });

  const { poetryPage } = poetryPageResponse;
  const { posts } = poetryPage;

  return getSEOMetadata({
    title: posts.title,
    description: `${posts.title}. ${posts.subTitle}`,
    openGraph: {
      images: [
        {
          url: '',
          width: 800,
          height: 600,
          alt: `${posts.title}. ${posts.subTitle}`,
        },
      ],
    },
  });
};

export default async function PoetryPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1', 10);
  const pageSize = 6;

  const { data: poetryPageResponse } = await apolloClient.query({
    query: poetryPageQuery,
  });

  const { poetryPage } = poetryPageResponse;
  const { posts } = poetryPage;

  const category = posts?.category?.slug || '';
  const sort = posts?.sort;

  const { posts: postItems, pagination } = await getPostsWithPagination({
    category,
    page: currentPage,
    pageSize,
    locale: 'ru',
    sort,
  });

  return (
    <div className="py-10" style={{ minHeight: 'calc(100vh - 130px)' }}>
      <div className="container text-center mx-auto">
        <TitleBlock>{posts.title}</TitleBlock>
        <p>{posts.subTitle}</p>
        {postItems?.length > 0 ? (
          <>
            <PostsList posts={postItems} />
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.pageCount}
              onPageChange={page => {
                if (typeof window !== 'undefined') {
                  const url = new URL(window.location.href);
                  if (page === 1) {
                    url.searchParams.delete('page');
                  } else {
                    url.searchParams.set('page', page.toString());
                  }
                  window.location.href = url.toString();
                }
              }}
            />
          </>
        ) : (
          EMPTY_PAGE_MESSAGE
        )}
      </div>
    </div>
  );
}
