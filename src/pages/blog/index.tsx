import styled from '@emotion/styled';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { NextPage } from 'next';

import InnerPageLayout from 'components/layouts/InnerPageLayout';
import PostsList from 'components/ui/PostsList';
import { blogPageQuery } from 'queries/blogPageQuery.gql';
import {
  BlogPage,
  BlogPageQueryQuery,
  BlogPageQueryQueryVariables,
} from 'queries/types/graphql';
import { Post } from 'types/index';
import apolloClient from 'utils/api/apollo-client';
import getPosts from 'utils/api/getPosts';

const EMPTY_PAGE_MESSAGE = 'Здесь ещё ничего нет или что-то пошло не так. 😎';

interface BlogPageProps {
  category: string;
  postItems: Post[];
  title: string;
  subTitle: string;
}

const BlogPageComponent: NextPage<BlogPageProps> = ({
  postItems,
  title,
  subTitle,
  category,
}) => {
  return (
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
          {postItems ? <PostsList posts={postItems} /> : EMPTY_PAGE_MESSAGE}
        </div>
      </BlogPageWrapper>
    </InnerPageLayout>
  );
};

export async function getStaticProps() {
  const { data: blogPageResponse } = await apolloClient.query<
    DocumentNode<BlogPageQueryQuery, BlogPageQueryQueryVariables>
  >({
    query: blogPageQuery,
  });

  const { blogPage } = blogPageResponse as BlogPageQueryQuery;
  const { posts } = blogPage as BlogPage;

  const category = posts?.category?.slug || 'blog';
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
      subTitle: posts?.subTitle || '',
    },
  };
}

export const BlogPageWrapper = styled.div`
  padding: 40px 0;
  min-height: calc(100vh - 130px);
`;

export default BlogPageComponent;
