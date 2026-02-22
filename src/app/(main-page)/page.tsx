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
    variables: { locale: 'uk-UA' },
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
    variables: { locale: 'uk-UA' },
  });

  // @ts-expect-error this should be fixed properly
  const { homePage } = indexPageResponse;

  const { hero, blogPosts, poetryPosts } = homePage;

  const [blogItems, poetryItems] = await Promise.all([
    getPosts({
      category: 'blog',
      limit: blogPosts?.limit,
      locale: 'uk-UA',
      sort: blogPosts?.sort,
    }),
    getPosts({
      category: 'poetry',
      limit: poetryPosts?.limit,
      locale: 'uk-UA',
      sort: poetryPosts?.sort,
    }),
  ]);


  console.log('blogItems', blogItems);
  console.log('poetryItems', poetryItems);

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
          blockTitle="Статті та публікації"
          blockSubtitle=""
        />
      )}
      {poetryItems?.length > 0 && (
        <PostsListSection
          posts={poetryItems}
          categoryInfo={blogItems[0]?.category || {}}
          blockTitle="Вірші та пісні"
          blockSubtitle=""
        />
      )}
    </>
  );
}
