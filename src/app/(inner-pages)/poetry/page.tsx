import PostsList from '@/components/PostsList';
import { poetryPageQuery } from '@/queries/poetryPageQuery.gql';
import { TitleBlock } from '@/styles';
import apolloClient from '@/utils/api/apollo-client';
import getPosts from '@/utils/api/getPosts';
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
}

export default async function PoetryPage() {
  const { data: poetryPageResponse } = await apolloClient.query({
    query: poetryPageQuery,
  });

  const { poetryPage } = poetryPageResponse;
  const { posts } = poetryPage;

  const category = posts?.category?.slug || '';
  const limit = posts?.limit;
  const sort = posts?.sort;

  const postItems = await getPosts({
    category,
    limit,
    locale: 'ru',
    sort,
  });

  return (
    <div className="py-10" style={{ minHeight: 'calc(100vh - 130px)' }}>
      <div className="container text-center mx-auto">
        <TitleBlock>{posts.title}</TitleBlock>
        <p>{posts.subTitle}</p>
        {postItems?.length > 0 ? (
              <PostsList posts={postItems} />
            ) : (
              EMPTY_PAGE_MESSAGE
            )}
      </div>
    </div>
  );
}
