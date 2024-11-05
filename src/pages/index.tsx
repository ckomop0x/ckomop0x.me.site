import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { NextPage } from 'next';

import MainPageLayout from 'components/layouts/MainPageLayout';
import Hero from 'components/sections/HeroSection';
import PostsListSection from 'components/sections/PostsListSection';
import { CategoryInfo } from 'components/ui/PostsList/types';
import { indexPageQuery } from 'queries/indexPageQuery.gql';
import {
  ComponentLayoutHeroInput,
  IndexPageQueryQuery,
  IndexPageQueryQueryVariables,
  PostInput,
} from 'queries/types/graphql';
import apolloClient from 'utils/api/apollo-client';
import getPosts from 'utils/api/getPosts';

interface IndexPageProps {
  blogItems: PostInput[];
  blogPostsCategoryInfo: CategoryInfo;
  poetryItems: PostInput[];
  poetryPostsCategoryInfo: CategoryInfo;
  hero: ComponentLayoutHeroInput;
}

const IndexPage: NextPage<IndexPageProps> = ({
  blogItems,
  blogPostsCategoryInfo,
  poetryItems,
  poetryPostsCategoryInfo,
  hero,
}): JSX.Element => (
  <MainPageLayout>
    {hero && (
      <Hero
        title={hero.title || ''}
        subtitle={hero.callToAction || ''}
        backgroundImage={hero.image || ''}
      />
    )}
    {blogItems?.length > 0 && (
      <PostsListSection
        posts={blogItems}
        categoryInfo={blogPostsCategoryInfo}
        blockTitle="Статьи и публикации"
        blockSubtitle=""
      />
    )}
    {poetryItems?.length > 0 && (
      <PostsListSection
        posts={poetryItems}
        categoryInfo={poetryPostsCategoryInfo}
        blockTitle="Стихи и песни"
        blockSubtitle=""
      />
    )}
  </MainPageLayout>
);

export async function getStaticProps() {
  const { data: indexPageResponse } = await apolloClient.query<
    DocumentNode<IndexPageQueryQuery, IndexPageQueryQueryVariables>
  >({
    query: indexPageQuery,
  });

  const { hero, blogPosts, poetryPosts } =
    indexPageResponse.homePage satisfies IndexPageQueryQuery;

  const [blogItems, poetryItems] = await Promise.all([
    getPosts({
      category: blogPosts?.category?.slug || '',
      limit: blogPosts?.limit || 3,
      locale: 'ru',
      sort: blogPosts?.sort || '',
    }),
    getPosts({
      category: poetryPosts?.category?.slug || '',
      limit: poetryPosts?.limit || 3,
      locale: 'ru',
      sort: poetryPosts?.sort || '',
    }),
  ]);

  return {
    props: {
      hero,
      blogItems,
      blogPostsCategoryInfo: blogPosts?.category || {},
      poetryItems,
      poetryPostsCategoryInfo: poetryPosts?.category || {},
    },
  };
}

export default IndexPage;
