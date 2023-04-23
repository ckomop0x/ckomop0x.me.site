import { gql } from '@apollo/client';

import { categoryFieldsFragment } from 'queries/fragments/categoryFieldsFragment.gql';

export const indexPageQuery = gql`
  ${categoryFieldsFragment}
  query IndexPageQuery($locale: I18NLocaleCode!) {
    homePage(publicationState: LIVE, locale: $locale) {
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
  }
`;
