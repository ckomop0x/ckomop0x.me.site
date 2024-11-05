import { gql } from '@apollo/client';

export const blogPageQuery = gql`
  query BlogPageQuery {
    blogPage {
      posts {
        limit
        sort
        title
        category {
          title
          slug
        }
      }
    }
  }
`;
