import { gql } from '@apollo/client';

export const categoryFieldsFragment = gql`
  fragment CategoryFragment on CategoryEntityResponse {
    data {
      attributes {
        title
        slug
      }
    }
  }
`;
