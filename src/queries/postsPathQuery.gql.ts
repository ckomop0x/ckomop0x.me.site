import { gql } from '@apollo/client';

export const postsPathQuery = gql`
  query PostsPathQuery($category: String!, $locale: I18NLocaleCode!) {
    posts(
      locale: $locale
      filters: { category: { Slug: { eq: $category } } }
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
