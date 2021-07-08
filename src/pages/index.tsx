import { INDEX_PAGE_QUERY } from '../queries/indexPageQuery.gql';

import MainPageLayout from 'components/layouts/MainPageLayout';
import FeaturedPost from 'components/sections/FeaturedPost';
import Hero from 'components/sections/Hero';
import PostsList from 'components/sections/PostsList';
import apolloClient from 'utils/api/apollo-client';

interface IIndexPage {
  blogItems: any;
  featured: any;
  poetryItems: any;
  categories: any;
}

export default function IndexPage({
  blogItems,
  featured,
  poetryItems,
  categories,
}: IIndexPage): JSX.Element {
  const [featuredItem] = featured;

  return (
    <MainPageLayout>
      <Hero
        title="Добро пожаловать в мой персональный блог"
        subtitle="Здесь живут мои стихи, песни, путешествия, заметки и фотографий."
      />
      {featuredItem && (
        <FeaturedPost post={featuredItem} categories={categories} />
      )}
      {blogItems?.length && (
        <PostsList
          items={blogItems}
          categories={categories}
          blockTitle="Статьи и публикации"
          blockSubtitle="Каждый новый вкус, запах звук раскрывает нас всё больше и больше и больше! Только так ты сможешь лучше узнать мир и себя. Будь смелее в своих желаниях."
        />
      )}

      {poetryItems?.length && (
        <PostsList
          items={poetryItems}
          categories={categories}
          blockTitle="Стихи и песни"
          blockSubtitle="Пиши, играй, пой, делай то, что тебе нравится и чувствуй вдохновение!"
        />
      )}
    </MainPageLayout>
  );
}

export async function getStaticProps(): Promise<any> {
  const { data } = await apolloClient.query({
    query: INDEX_PAGE_QUERY,
  });
  const { featured, blogItems, poetryItems, categories } = data;

  return {
    props: {
      featured,
      blogItems,
      poetryItems,
      categories,
    },
  };
}
