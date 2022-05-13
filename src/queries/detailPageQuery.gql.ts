import { gql } from '@apollo/client';

export const detailsPageQuery = gql`
  query DetailsPageQuery($slug: String!, $category: String!) {
    posts(
      filters: { slug: { eq: $slug }, category: { Slug: { eq: $category } } }
      pagination: { limit: 100 }
      publicationState: LIVE
    ) {
      data {
        id
        attributes {
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
          }
        }
      }
    }
  }
`;
