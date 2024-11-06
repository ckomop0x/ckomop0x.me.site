import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { NextPage } from 'next';

import { BlogPageWrapper } from '../blog';

import InnerPageLayout from 'components/layouts/InnerPageLayout';
import PostsList from 'components/ui/PostsList';
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
    <BlogPageWrapper>
      <div className="container">
        <h1>{title}</h1>
        <p>{subTitle}</p>
        {postItems?.length > 0 ? (
          <PostsList posts={postItems} />
        ) : (
          EMPTY_PAGE_MESSAGE
        )}
      </div>
    </BlogPageWrapper>
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

  const { data: postItems } = await getPosts({
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
