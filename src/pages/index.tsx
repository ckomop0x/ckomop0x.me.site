import { graphql } from 'gatsby';
import React from 'react';
import { Hero } from '@components/sections';

import { MainPageLayout } from '../components/containers';
import ItemsList from '@components/ItemsList';
import { TitleBlock } from '@styles/Typography';

export const query = graphql`
  query IndexPageQuery {
    poetry: allStrapiPosts(
      filter: { category: { eq: "poetry" } }
      sort: { fields: [createdAt], order: [DESC] }
      limit: 4
    ) {
      edges {
        node {
          title
          slug
          published
          strapiId
          excerpt
          category
          createdAt
          updatedAt
        }
      }
    }
    blog: allStrapiPosts(
      filter: { category: { eq: "blog" } }
      sort: { fields: [createdAt], order: [DESC] }
      limit: 4
    ) {
      edges {
        node {
          title
          slug
          published
          strapiId
          excerpt
          category
          createdAt
          updatedAt
        }
      }
    }
    categories: allStrapiCategories {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`;

export default (props: any) => {
  const { data, errors } = props;
  const poetryItems = data && data.poetry.edges;
  const blogItems = data && data.blog.edges;
  const categoriesItems = data && data.categories.edges;

  return (
    <MainPageLayout>
      <Hero
        title="Стихи, песни и путешествия"
        subtitle="Персональный блог Павла Клочкова"
      />
      <div className="container">
        <TitleBlock>Публикации</TitleBlock>
        <ItemsList items={blogItems} categories={categoriesItems} />
        <TitleBlock>Стихи</TitleBlock>
        <ItemsList items={poetryItems} categories={categoriesItems} />
      </div>
    </MainPageLayout>
  );
};
