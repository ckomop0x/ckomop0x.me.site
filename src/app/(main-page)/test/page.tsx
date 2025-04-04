import MainPageLayout from '@/components/layouts/MainPageLayout';
import Hero from '@/components/sections/HeroSection';
import PostsListSection from '@/components/sections/PostsListSection';
import { indexPageQuery } from '@/queries/indexPageQuery.gql';
import apolloClient from '@/utils/api/apollo-client';
import getPosts from '@/utils/api/getPosts';

export const revalidate = 10; // revalidate at most every 10 sec

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
    </MainPageLayout>
  );
}
