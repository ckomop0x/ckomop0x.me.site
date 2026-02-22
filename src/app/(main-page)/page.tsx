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
    variables: { locale: 'uk' },
  });

  // @ts-expect-error this should be fixed properly
  const { homePage } = indexPageResponse;

  return getSEOMetadata({
    title: 'Головна',
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
    variables: { locale: 'uk' },
  });

  // @ts-expect-error this should be fixed properly
  const { homePage } = indexPageResponse;

  const { hero, blogPosts, poetryPosts } = homePage;

  const [blogItems, poetryItems] = await Promise.all([
    getPosts({
      category: 'blog',
      limit: blogPosts?.limit,
      locale: 'uk',
      sort: blogPosts?.sort,
    }),
    getPosts({
      category: 'poetry',
      limit: poetryPosts?.limit,
      locale: 'uk',
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
          categoryInfo={blogItems[0]?.category || {}}
          blockTitle={blogPosts.title || 'Блог'}
          blockSubtitle=""
        />
      )}
      {poetryItems?.length > 0 && (
        <PostsListSection
          posts={poetryItems}
          categoryInfo={poetryItems[0]?.category || {}}
          blockTitle={poetryPosts.title || 'Вірші та пісні'}
          blockSubtitle=""
        />
      )}
    </>
  );
}
