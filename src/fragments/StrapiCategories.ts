import { graphql } from 'gatsby';

export const StrapiCategories = graphql`
  fragment StrapiCategories on StrapiCategoriesEdge {
    node {
      name
      slug
    }
  }
`;
