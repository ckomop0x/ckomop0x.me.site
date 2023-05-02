import { gql } from '@apollo/client';

import { categoryFieldsFragment } from 'queries/fragments/categoryFieldsFragment.gql';

export const blogPageQuery = gql`
  ${categoryFieldsFragment}

  query BlogPageQuery {
    blogPage {
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
