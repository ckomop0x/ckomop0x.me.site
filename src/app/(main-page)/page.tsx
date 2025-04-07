import Hero from '@/components/sections/HeroSection';
import PostsListSection from '@/components/sections/PostsListSection';
import { indexPageQuery } from '@/queries/indexPageQuery.gql';
import apolloClient from '@/utils/api/apollo-client';
import getPosts from '@/utils/api/getPosts';
import { getSEOMetadata } from '@/utils/seo/getSEOMetadata';

export const revalidate = 10; // revalidate at most every 10 sec

export const generateMetadata = async () => {
  const { data: indexPageResponse } = await apolloClient.query({
    query: indexPageQuery,
  });

  const { homePage } = indexPageResponse;

  return getSEOMetadata({
    title: 'Главная',
    description: `${homePage.hero.title}. ${homePage.hero.callToAction}`,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ckomop0x.me',
    siteName: 'ckomop0x.me. Личный сайт Павла Клочкова',
    author: 'Павел Клочков',
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
  });

  const { homePage } = indexPageResponse;
  const { hero, blogPosts, poetryPosts } = homePage;

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
