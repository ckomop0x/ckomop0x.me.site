import { graphql } from 'gatsby';
import React from 'react';
import { Hero } from '@components/sections';

import { MainPageLayout } from '../containers';
import ItemsList from '@components/ItemsList';

export const query = graphql`
  query IndexPageQuery {
    poetry: allStrapiPosts(
      filter: { category: { eq: "poetry" } }
      sort: { fields: [createdAt] }
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
        }
      }
    }
    blog: allStrapiPosts(
      filter: { category: { eq: "blog" } }
      sort: { fields: [createdAt] }
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
        <h2>Публикации</h2>
        <ItemsList items={blogItems} categories={categoriesItems}/>
        <h2>Стихи</h2>
        <ItemsList items={poetryItems} categories={categoriesItems}/>
      </div>
    </MainPageLayout>
  );
};
