import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

import PostsList from '@/components/PostsList';
import {
  BlogPage,
  BlogPageQueryQuery,
  BlogPageQueryQueryVariables,
} from '@/queries/__generated__/graphql';
import { blogPageQuery } from '@/queries/blogPageQuery.gql';
import { TitleBlock } from '@/styles';
import apolloClient from '@/utils/api/apollo-client';
import getPosts from '@/utils/api/getPosts';
import { getSEOMetadata } from '@/utils/seo/getSEOMetadata';

const EMPTY_PAGE_MESSAGE = 'Здесь ещё ничего нет или что-то пошло не так. 😎';

export const revalidate = 10;

export const generateMetadata = async () => {
  const { data: blogPageResponse } = await apolloClient.query<
    DocumentNode<BlogPageQueryQuery, BlogPageQueryQueryVariables>
  >({
    query: blogPageQuery,
  });

  const { blogPage } = blogPageResponse as BlogPageQueryQuery;
  const { posts } = blogPage as BlogPage;

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
  const { data: blogPageResponse } = await apolloClient.query<
    DocumentNode<BlogPageQueryQuery, BlogPageQueryQueryVariables>
  >({
    query: blogPageQuery,
  });

  const { blogPage } = blogPageResponse as BlogPageQueryQuery;
  const { posts } = blogPage as BlogPage;

  const category = posts?.category?.slug || '';
  const limit = posts?.limit;
  const sort = posts?.sort || '';

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
