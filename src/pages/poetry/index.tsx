import { NextPage } from 'next';

import { BlogPageWrapper } from '../blog';

import InnerPageLayout from 'components/layouts/InnerPageLayout';
import PostsList from 'components/ui/PostsList';
import { postsPageQuery } from 'queries/postsPageQuery.gql';
import { CategoryPageProps, CategoryInterface } from 'types';
import apolloClient from 'utils/api/apollo-client';

const CATEGORY: CategoryInterface = 'poetry';
const LIMIT = 100;
const TITLE = 'Стихи и песни';
const SUB_TITLE =
  'Стихи и песни написанные в разное время, в разных городах и странах. Пишу, играю, пою и делаю то, что дарит вдохновение!';
const EMPTY_PAGE_MESSAGE = 'Здесь ещё ничего нет или что-то пошло не так. 😎';

const PoetryPage: NextPage<CategoryPageProps> = ({ posts }): JSX.Element => (
  <InnerPageLayout
    headTitle={TITLE}
    ogUrl={CATEGORY}
    ogDescription={TITLE}
    twitterCard={SUB_TITLE}
  >
    <BlogPageWrapper>
      <div className="container">
        <h1>{TITLE}</h1>
        <p>{SUB_TITLE}</p>
        {posts ? <PostsList posts={posts} /> : EMPTY_PAGE_MESSAGE}
      </div>
    </BlogPageWrapper>
  </InnerPageLayout>
);

export async function getStaticProps(): Promise<{
  props: CategoryPageProps;
}> {
  const {
    data: { posts },
  } = await apolloClient.query({
    query: postsPageQuery,
    variables: {
      category: CATEGORY,
      limit: LIMIT,
      locale: 'ru',
      sort: 'date:desc',
    },
  });

  return {
    props: {
      posts: posts.data,
    },
  };
}

export default PoetryPage;
