import { gql } from '@apollo/client';

export const postsPathQuery = gql`
  query PostsPathQuery($category: String!, $locale: I18NLocaleCode!) {
    posts(
      locale: $locale
      filters: { category: { slug: { eq: $category } } }
      pagination: { limit: 100 }
    ) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;
