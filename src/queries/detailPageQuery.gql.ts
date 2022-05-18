import { gql } from '@apollo/client';

import { categoryFieldsFragment } from 'queries/fragments/categoryFieldsFragment.gql';

export const detailsPageQuery = gql`
  ${categoryFieldsFragment}
  query DetailsPageQuery($category: String!, $slug: String!) {
    posts(
      filters: { slug: { eq: $slug }, category: { slug: { eq: $category } } }
      publicationState: LIVE
    ) {
      data {
        id
        attributes {
          category {
            ...CategoryFragment
          }
          date
          updatedAt
          excerpt
          title
          slug
          PostImage {
            url
            title
          }
          Content {
            ... on ComponentContentRichText {
              __typename
              description
            }
            ... on ComponentContentImage {
              __typename
              title
              url
            }
          }
        }
      }
    }
  }
`;
