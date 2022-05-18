import { NextPage } from 'next';

import MainPageLayout from 'components/layouts/MainPageLayout';
import Hero from 'components/sections/HeroSection';
import PostsListSection from 'components/sections/PostsListSection';
import { indexPageQuery } from 'queries/indexPageQuery.gql';
import {
  IndexPageQuery_blogItems_data,
  IndexPageQuery_poetryItems_data,
} from 'queries/types/indexPageQuery';
import apolloClient from 'utils/api/apollo-client';

const mainPageData = {
  title: 'Добро пожаловать в мой персональный блог',
  subtitle: 'Здесь живут мои стихи, песни, путешествия, заметки и фотографий.',
  backgroundImage:
    'https://ik.imagekit.io/ckomop0x/ckomop0x-me/main-page/20180901-DSC_0568-Edit-3_qcFKvrDzNYg.jpg',
};

interface IndexPageProps {
  blogItems: IndexPageQuery_blogItems_data[];
  poetryItems: IndexPageQuery_poetryItems_data[];
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
    {blogItems?.length > 0 && (
      <PostsListSection
        posts={blogItems}
        categoryInfo={blogItems[0].attributes?.category?.data?.attributes}
        blockTitle="Статьи и публикации"
        blockSubtitle="Каждый новый вкус, запах звук раскрывает нас всё больше и больше и больше! Только так ты сможешь лучше узнать мир и себя. Будь смелее в своих желаниях."
      />
    )}

    {poetryItems?.length > 0 && (
      <PostsListSection
        posts={poetryItems}
        categoryInfo={poetryItems[0].attributes?.category?.data?.attributes}
        blockTitle="Стихи и песни"
        blockSubtitle="Пиши, играй, пой, делай то, что тебе нравится и чувствуй вдохновение!"
      />
    )}
  </MainPageLayout>
);

export async function getStaticProps(): Promise<{
  props: IndexPageProps;
}> {
  const { data } = await apolloClient.query({
    query: indexPageQuery,
  });
  const { blogItems, poetryItems } = data;

  return {
    props: {
      blogItems: blogItems.data,
      poetryItems: poetryItems.data,
    },
  };
}

export default IndexPage;
