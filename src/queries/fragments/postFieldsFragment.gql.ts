import { gql } from '@apollo/client';

export const postFieldsFragment = gql`
  fragment PostFieldsFragment on Post {
    documentId
    date
    updatedAt
    excerpt
    featured
    title
    slug
    category {
      title
      slug
    }
    coverImage {
      url
    }
    PostImage {
      title
      url
    }
  }
`;
