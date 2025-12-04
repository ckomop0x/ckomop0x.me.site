import { gql } from '@apollo/client';

export const poetryPageQuery = gql`
  query PoetryPageQuery {
    poetryPage(locale: "ru", status: PUBLISHED) {
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
