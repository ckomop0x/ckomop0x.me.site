import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { NextPage } from 'next';

import MainPageLayout from 'components/layouts/MainPageLayout';
import Hero from 'components/sections/HeroSection';
import PostsListSection from 'components/sections/PostsListSection';
import { indexPageQuery } from 'queries/indexPageQuery.gql';
import {
  HomePageEntity,
  HomePageEntityResponse,
  IndexPageQueryQuery,
  IndexPageQueryQueryVariables,
  PostEntityResponseCollection,
} from 'queries/types/graphql';
import apolloClient from 'utils/api/apollo-client';

interface IndexPageProps {
  blogItems: PostEntityResponseCollection;
  poetryItems: PostEntityResponseCollection;
  homePage: HomePageEntityResponse;
  loading: boolean;
}

const IndexPage: NextPage<IndexPageProps> = ({
  blogItems,
  poetryItems,
  homePage,
  loading,
}): JSX.Element => {
  const heroContent = homePage?.data?.attributes?.hero;

  return (
    <MainPageLayout>
      {!loading && heroContent && (
        <Hero
          title={heroContent.title}
          subtitle={heroContent.callToAction}
          backgroundImage={heroContent.image}
        />
      )}
      {blogItems?.data?.length > 0 && (
        <PostsListSection
          posts={blogItems.data}
          categoryInfo={
            blogItems.data[0].attributes?.category?.data?.attributes
          }
          blockTitle="Статьи и публикации"
          blockSubtitle="Каждый новый вкус, запах звук раскрывает нас всё больше и больше и больше! Только так ты сможешь лучше узнать мир и себя. Будь смелее в своих желаниях."
        />
      )}

      {poetryItems?.data?.length > 0 && (
        <PostsListSection
          posts={poetryItems.data}
          categoryInfo={
            poetryItems.data[0].attributes?.category?.data?.attributes
          }
          blockTitle="Стихи и песни"
          blockSubtitle="Пиши, играй, пой, делай то, что тебе нравится и чувствуй вдохновение!"
        />
      )}
    </MainPageLayout>
  );
};

export async function getStaticProps() {
  const { data, loading } = await apolloClient.query<
    DocumentNode<IndexPageQueryQuery, IndexPageQueryQueryVariables>
  >({
    query: indexPageQuery,
  });
  const { blogItems, poetryItems, homePage } = data as IndexPageQueryQuery;

  return {
    props: {
      loading,
      blogItems,
      poetryItems,
      homePage,
    },
  };
}

export default IndexPage;
