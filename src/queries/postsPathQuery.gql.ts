import { gql } from '@apollo/client';

export const postsPathQuery = gql`
  query PostsPathQuery(
    $category: String!
    $locale: I18NLocaleCode!
    $limit: Int!
  ) {
    posts(
      locale: $locale
      filters: { category: { slug: { eq: $category } } }
      pagination: { limit: $limit }
    ) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;
