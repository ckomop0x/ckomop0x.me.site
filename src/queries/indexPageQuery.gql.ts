import { gql } from '@apollo/client';

export const indexPageQuery = gql`
  query IndexPageQuery {
    homePage {
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
