import PostsList from '@/components/PostsList';
import InnerPageLayout from '@/components/layouts/InnerPageLayout';
import { poetryPageQuery } from '@/queries/poetryPageQuery.gql';
import { TitleBlock } from '@/styles';
import apolloClient from '@/utils/api/apollo-client';
import getPosts from '@/utils/api/getPosts';

const EMPTY_PAGE_MESSAGE = 'Здесь ещё ничего нет или что-то пошло не так. 😎';

export const revalidate = 10;

export default async function PoetryPage() {
  const { data: poetryPageResponse } = await apolloClient.query({
    query: poetryPageQuery,
  });

  const { poetryPage } = poetryPageResponse;
  const { posts } = poetryPage;

  const category = posts?.category?.slug || '';
  const limit = posts?.limit || 3;
  const sort = posts?.sort || '';

  const postItems = await getPosts({
    category,
    limit,
    locale: 'ru',
    sort,
  });

  return (
    <InnerPageLayout>
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
    </InnerPageLayout>
  );
}
