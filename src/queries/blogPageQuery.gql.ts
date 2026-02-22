import { gql } from '@apollo/client';

export const blogPageQuery = gql`
  query BlogPageQuery($locale: I18NLocaleCode!) {
    blogPage(locale: $locale, status: PUBLISHED) {
      posts {
        limit
        sort
        title
        subTitle
        category {
          title
          slug
        }
      }
    }
  }
`;
