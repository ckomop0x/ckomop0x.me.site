import { gql } from '@apollo/client';

import { categoryFieldsFragment } from 'queries/fragments/categoryFieldsFragment.gql';

export const homePageFragment = gql`
  ${categoryFieldsFragment}
  fragment HomePageFragment on HomePageEntityResponse {
    data {
      id
      attributes {
        title
        hero {
          id
          title
          callToAction
          image
        }
        blogPosts {
          id
          title
          limit
          sort
          subTitle
          category {
            ...CategoryFragment
          }
        }
        poetryPosts {
          id
          title
          limit
          sort
          subTitle
          category {
            ...CategoryFragment
          }
        }
      }
    }
  }
`;
