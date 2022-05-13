import { gql } from '@apollo/client';

import { categoryFieldsFragment } from 'queries/fragments/categoryFieldsFragment.gql';

export const postFieldsFragment = gql`
  ${categoryFieldsFragment}
  fragment PostFieldsFragment on PostEntityResponseCollection {
    data {
      id
      attributes {
        date
        updatedAt
        excerpt
        featured
        title
        slug
        category {
          ...CategoryFragment
        }
        PostImage {
          title
          url
        }
      }
    }
  }
`;
