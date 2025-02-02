import { gql } from '@apollo/client';

export const poetryPageQuery = gql`
  query PoetryPageQuery {
    poetryPage {
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
