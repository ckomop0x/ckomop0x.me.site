import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { NextPage } from 'next';

import MainPageLayout from 'components/layouts/MainPageLayout';
import Hero from 'components/sections/HeroSection';
import PostsListSection from 'components/sections/PostsListSection';
import { indexPageQuery } from 'queries/indexPageQuery.gql';
import {
  ComponentLayoutHeroInput,
  HomePage,
  HomePageEntityResponse,
  IndexPageQueryQuery,
  IndexPageQueryQueryVariables,
  PostEntityResponseCollection,
} from 'queries/types/graphql';
import apolloClient from 'utils/api/apollo-client';
import getPosts from 'utils/api/getPosts';

interface IndexPageProps {
  blogItems: PostEntityResponseCollection;
  poetryItems: PostEntityResponseCollection;
  hero: ComponentLayoutHeroInput;
}

const IndexPage: NextPage<IndexPageProps> = ({
  blogItems,
  poetryItems,
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
    {blogItems?.data?.length > 0 && (
      <PostsListSection
        posts={blogItems.data}
        categoryInfo={blogItems.data[0].attributes?.category?.data?.attributes}
        blockTitle="Статьи и публикации"
        blockSubtitle=""
      />
    )}

    {poetryItems?.data?.length > 0 && (
      <PostsListSection
        posts={poetryItems.data}
        categoryInfo={
          poetryItems.data[0].attributes?.category?.data?.attributes
        }
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
    variables: {
      locale: 'ru',
    },
  });

  const { homePage } = indexPageResponse as IndexPageQueryQuery;
  const { data: homePageData } = homePage as HomePageEntityResponse;
  const { hero, blogPosts, poetryPosts } = homePageData?.attributes as HomePage;

  const [blogItems, poetryItems] = await Promise.all([
    getPosts({
      category: blogPosts?.category?.data?.attributes?.slug || '',
      limit: blogPosts?.limit || 3,
      locale: 'ru',
      sort: blogPosts?.sort || '',
    }),
    getPosts({
      category: poetryPosts?.category?.data?.attributes?.slug || '',
      limit: poetryPosts?.limit || 3,
      locale: 'ru',
      sort: poetryPosts?.sort || '',
    }),
  ]);
  return {
    props: {
      hero,
      blogItems,
      poetryItems,
    },
  };
}

export default IndexPage;
