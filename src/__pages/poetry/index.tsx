import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { NextPage } from 'next';

import { TitleBlock } from '@/styles';
import PostsList from 'components/PostsList';
import InnerPageLayout from 'components/layouts/InnerPageLayout';
import { poetryPageQuery } from 'queries/poetryPageQuery.gql';
import {
  PoetryPage,
  PoetryPageQueryQuery,
  PoetryPageQueryQueryVariables,
} from 'queries/types/graphql';
import { Post } from 'types/index';
import apolloClient from 'utils/api/apollo-client';
import getPosts from 'utils/api/getPosts';

const EMPTY_PAGE_MESSAGE = 'Здесь ещё ничего нет или что-то пошло не так. 😎';

interface PoetryPageProps {
  category: string;
  postItems: Post[];
  title: string;
  subTitle: string;
}

const PoetryPageComponent: NextPage<PoetryPageProps> = ({
  postItems,
  title,
  subTitle,
  category,
}) => (
  <InnerPageLayout
    headTitle={title}
    ogUrl={category}
    ogDescription={title}
    twitterCard={subTitle}
  >
    <div className="py-10" style={{ minHeight: 'calc(100vh - 130px)' }}>
      <div className="container text-center mx-auto">
        <TitleBlock>{title}</TitleBlock>
        <p>{subTitle}</p>
        {postItems?.length > 0 ? (
          <PostsList posts={postItems} />
        ) : (
          EMPTY_PAGE_MESSAGE
        )}
      </div>
    </div>
  </InnerPageLayout>
);

export async function getStaticProps() {
  const { data: poetryPageResponse } = await apolloClient.query<
    DocumentNode<PoetryPageQueryQuery, PoetryPageQueryQueryVariables>
  >({
    query: poetryPageQuery,
  });

  const { poetryPage } = poetryPageResponse as PoetryPageQueryQuery;
  const { posts } = poetryPage as PoetryPage;

  const category = posts?.category?.slug || '';
  const limit = posts?.limit || 3;
  const sort = posts?.sort || '';

  const postItems = await getPosts({
    category,
    limit,
    locale: 'ru',
    sort,
  });

  return {
    props: {
      category,
      postItems,
      title: posts.title,
      subTitle: posts.subTitle,
    },
  };
}

export default PoetryPageComponent;
