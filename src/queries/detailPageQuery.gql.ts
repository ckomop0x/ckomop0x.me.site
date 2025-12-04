import { gql } from '@apollo/client';

export const detailsPageQuery = gql`
  query DetailsPageQuery($category: String!, $slug: String!) {
    posts(
      filters: { slug: { eq: $slug }, category: { slug: { eq: $category } } }
      status: PUBLISHED
      locale: "ru"
    ) {
      documentId
      category {
        title
        slug
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
`;
