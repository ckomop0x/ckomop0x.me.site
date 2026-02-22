import { gql } from '@apollo/client';

export const indexPageQuery = gql`
  query IndexPageQuery($locale: I18NLocaleCode!) {
    homePage(locale: $locale, status: PUBLISHED) {
      documentId
      title
      hero {
        id
        title
        callToAction
        image
      }
      blogPosts {
        id
        title
        limit
        sort
        subTitle
        category {
          title
          slug
        }
      }
      poetryPosts {
        id
        title
        limit
        sort
        subTitle
        category {
          title
          slug
        }
      }
    }
  }
`;
