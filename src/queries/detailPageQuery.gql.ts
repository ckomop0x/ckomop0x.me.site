import { gql } from '@apollo/client';

export const DETAILS_PAGE_QUERY = gql`
  query DETAILS_PAGE_QUERY($slug: String!, $category: String!) {
    posts(
      where: { slug: $slug, category: $category }
      limit: 1
      publicationState: LIVE
    ) {
      id
      title
      slug
      image_url
      published
      excerpt
      content {
        ... on ComponentPostRichText {
          __typename
          rich_text
        }
      }
      created_at
      updated_at
      description
    }
  }
`;
