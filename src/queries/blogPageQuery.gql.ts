import { gql } from '@apollo/client';

export const blogPageQuery = gql`
  query BlogPageQuery {
    blogPage(locale: "ru", status: PUBLISHED) {
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
