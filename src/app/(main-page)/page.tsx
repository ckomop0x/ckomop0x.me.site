import Hero from '@/components/sections/HeroSection';
import PostsListSection from '@/components/sections/PostsListSection';
import { indexPageQuery } from '@/queries/indexPageQuery.gql';
import apolloClient from '@/utils/api/apollo-client';
import getPosts from '@/utils/api/getPosts';
import { getSEOMetadata } from '@/utils/seo/getSEOMetadata';

export const revalidate = 3600;

export const generateMetadata = async () => {
  const { data: indexPageResponse } = await apolloClient.query({
    query: indexPageQuery,
  });

  // @ts-expect-error this should be fixed properly
  const { homePage } = indexPageResponse;

  return getSEOMetadata({
    title: 'Главная',
    description: `${homePage.hero.title}. ${homePage.hero.callToAction}`,
    openGraph: {
      images: [
        {
          url: homePage.hero.image,
          width: 800,
          height: 600,
          alt: `${homePage.hero.title}. ${homePage.hero.callToAction}`,
        },
      ],
    },
  });
};

export default async function IndexPage() {
  const { data: indexPageResponse } = await apolloClient.query({
    query: indexPageQuery,
    variables: { locale: 'ru' },
  });

  // @ts-expect-error this should be fixed properly
  const { homePage } = indexPageResponse;

  const { hero, blogPosts, poetryPosts } = homePage;

  const [blogItems, poetryItems] = await Promise.all([
    getPosts({
      category: 'blog',
      limit: blogPosts?.limit,
      locale: 'ru',
      sort: blogPosts?.sort,
    }),
    getPosts({
      category: 'poetry',
      limit: poetryPosts?.limit,
      locale: 'ru',
      sort: poetryPosts?.sort,
    }),
  ]);

  return (
    <>
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
          categoryInfo={blogPosts?.category || {}}
          blockTitle="Статьи и публикации"
          blockSubtitle=""
        />
      )}
      {poetryItems?.length > 0 && (
        <PostsListSection
          posts={poetryItems}
          categoryInfo={poetryPosts?.category || {}}
          blockTitle="Стихи и песни"
          blockSubtitle=""
        />
      )}
    </>
  );
}
