import { gql } from '@apollo/client';

import { categoryFieldsFragment } from 'queries/fragments/categoryFieldsFragment.gql';

export const poetryPageQuery = gql`
  ${categoryFieldsFragment}

  query PoetryPageQuery {
    poetryPage {
      data {
        attributes {
          posts {
            limit
            sort
            title
            subTitle
            category {
              ...CategoryFragment
            }
          }
        }
      }
    }
  }
`;
