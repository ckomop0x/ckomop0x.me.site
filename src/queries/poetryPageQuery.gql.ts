import { gql } from '@apollo/client';

export const poetryPageQuery = gql`
  query PoetryPageQuery($locale: I18NLocaleCode!) {
    poetryPage(locale: $locale, status: PUBLISHED) {
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
