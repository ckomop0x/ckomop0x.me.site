import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { NextPage } from 'next';

import MainPageLayout from 'components/layouts/MainPageLayout';
import Hero from 'components/sections/HeroSection';
import PostsListSection from 'components/sections/PostsListSection';
import { indexPageQuery } from 'queries/indexPageQuery.gql';
import {
  IndexPageQueryQuery,
  IndexPageQueryQueryVariables,
  PostEntityResponseCollection,
} from 'queries/types/graphql';
import apolloClient from 'utils/api/apollo-client';

const mainPageData = {
  title: 'Добро пожаловать в мой персональный блог',
  subtitle: 'Здесь живут мои стихи, песни, путешествия, заметки и фотографий.',
  backgroundImage:
    'https://ik.imagekit.io/ckomop0x/ckomop0x-me/main-page/20180901-DSC_0568-Edit-3_qcFKvrDzNYg.jpg',
};

interface IndexPageProps {
  blogItems: PostEntityResponseCollection;
  poetryItems: PostEntityResponseCollection;
}

const IndexPage: NextPage<IndexPageProps> = ({
  blogItems,
  poetryItems,
}): JSX.Element => (
  <MainPageLayout>
    <Hero
      title={mainPageData.title}
      subtitle={mainPageData.subtitle}
      backgroundImage={mainPageData.backgroundImage}
    />
    {blogItems?.data?.length > 0 && (
      <PostsListSection
        posts={blogItems.data}
        categoryInfo={blogItems.data[0].attributes?.category?.data?.attributes}
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

export async function getStaticProps() {
  const { data } = await apolloClient.query<
    DocumentNode<IndexPageQueryQuery, IndexPageQueryQueryVariables>
  >({
    query: indexPageQuery,
  });
  const { blogItems, poetryItems } = data as IndexPageQueryQuery;

  return {
    props: {
      blogItems,
      poetryItems,
    },
  };
}

export default IndexPage;
