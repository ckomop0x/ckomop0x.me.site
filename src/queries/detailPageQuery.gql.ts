import { gql } from '@apollo/client';

export const detailsPageQuery = gql`
  query DetailsPageQuery($category: String!, $slug: String!, $locale: I18NLocaleCode!) {
    posts(
      filters: { slug: { eq: $slug }, category: { slug: { eq: $category } } }
      status: PUBLISHED
      locale: $locale
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
