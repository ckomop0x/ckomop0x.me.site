import { gql } from '@apollo/client';

export const POSTS_PATH_QUERY = gql`
  query POSTS_PATH_QUERY($category: String!) {
    posts(where: { category: $category }, limit: 20) {
      slug
    }
  }
`;
