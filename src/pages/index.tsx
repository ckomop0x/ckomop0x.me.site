import { graphql } from 'gatsby';
import React from 'react';

import { IndexPageQuery } from './__generated__/IndexPageQuery';

import MainPageLayout from 'components/layouts/MainPageLayout';
import FeaturedPost from 'components/sections/FeaturedPost';
import Hero from 'components/sections/Hero';
import PostsList from 'components/sections/PostsList';

interface IIndexPage {
  data: IndexPageQuery;
}

const IndexPage: React.FC<IIndexPage> = ({ data }) => {
  const [featuredItem] = data?.featured.edges;
  const poetryItems = data?.poetry.edges;
  const blogItems = data?.blog.edges;
  const categoriesItems = data?.categories.edges;

  return (
    <MainPageLayout>
      <Hero
        title="Добро пожаловать в мой персональный блог"
        subtitle="Здесь живут мои стихи, песни, путешествия, заметки и фотографий."
      />
      <FeaturedPost post={featuredItem.node} categories={categoriesItems} />
      {blogItems?.length > 0 && (
        <PostsList
          items={blogItems}
          categories={categoriesItems}
          blockTitle="Статьи и публикации"
          blockSubtitle="Каждый новый вкус, запах звук раскрывает нас всё больше и больше и больше! Только так ты сможешь лучше узнать мир и себя. Будь смелее в своих желаниях."
        />
      )}

      {poetryItems?.length > 0 && (
        <PostsList
          items={poetryItems}
          categories={categoriesItems}
          blockTitle="Стихи и песни"
          blockSubtitle="Пиши, играй, пой, делай то, что тебе нравится и чувствуй вдохновение!"
        />
      )}
    </MainPageLayout>
  );
};

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

export default IndexPage;
