import { graphql } from 'gatsby';
import React from 'react';

import { MainPageLayout } from '@components/containers';
import { PostsList, Hero, FeaturedPost } from '@components/sections';
import { TitleBlock, SubtitleBlock } from '@styles/Typography';
import { IndexPageQuery } from './__generated__/IndexPageQuery';

export const query = graphql`
  query IndexPageQuery {
    featured: allStrapiPosts(filter: { featured: { eq: true } }, limit: 1) {
      edges {
        node {
          ...PostFields
        }
      }
    }

    poetry: allStrapiPosts(
      filter: { category: { eq: "poetry" }, featured: { eq: false } }
      sort: { fields: [createdAt], order: [DESC] }
      limit: 3
    ) {
      edges {
        node {
          ...PostFields
        }
      }
    }
    blog: allStrapiPosts(
      filter: { category: { eq: "blog" }, featured: { eq: false } }
      sort: { fields: [createdAt], order: [DESC] }
      limit: 3
    ) {
      edges {
        node {
          ...PostFields
        }
      }
    }
    categories: allStrapiCategories {
      edges {
        ...StrapiCategories
      }
    }
  }
`;

export default (props: { data: IndexPageQuery }) => {
  const { data } = props;
  const [featuredItem] = data && data.featured.edges;
  const poetryItems = data && data.poetry.edges;
  const blogItems = data && data.blog.edges;
  const categoriesItems = data && data.categories.edges;

  return (
    <MainPageLayout>
      <Hero
        title="Стихи, песни, путешествия и заметки"
        subtitle="Привет, здесь живут мои стихи, песни, путешествия, заметки и фотографий."
      />
      <FeaturedPost post={featuredItem.node} categories={categoriesItems} />
      <PostsList
        items={blogItems}
        categories={categoriesItems}
        blockTitle="Пробуй и Путешествуй"
        blockSubtitle="Каждый новый вкус, запах звук раскрывает нас всё больше и больше и больше! Только так ты сможешь лучше узнать мир и себя. Будь смелее в своих желаниях."
      />

      <PostsList
        items={poetryItems}
        categories={categoriesItems}
        blockTitle="Твори"
        blockSubtitle="Пиши, играй, пой, делай то, что тебе нравится и чувствуй вдохновение!"
      />
    </MainPageLayout>
  );
};
