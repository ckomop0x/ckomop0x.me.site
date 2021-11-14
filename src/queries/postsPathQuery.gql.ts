import { gql } from '@apollo/client';

export const postsPathQuery = gql`
  query PostsPathQuery($category: String!) {
    posts(where: { category: $category }, limit: 20) {
      slug
    }
  }
`;
