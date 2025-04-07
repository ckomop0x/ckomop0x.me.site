import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { NextPage } from 'next';

import { TitleBlock } from '@/styles';
import { Post } from '@/types';
import PostsList from 'components/PostsList';
import InnerPageLayout from 'components/layouts/InnerPageLayout';
import { blogPageQuery } from 'queries/blogPageQuery.gql';
import {
  BlogPage,
  BlogPageQueryQuery,
  BlogPageQueryQueryVariables,
} from 'queries/types/graphql';
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
    <InnerPageLayout>
      <div className="py-10" style={{ minHeight: 'calc(100vh - 130px)' }}>
        <div className="container text-center mx-auto">
          <TitleBlock>
            {title} - {subTitle}
          </TitleBlock>
          {postItems ? <PostsList posts={postItems} /> : EMPTY_PAGE_MESSAGE}
        </div>
      </div>
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

export default BlogPageComponent;
