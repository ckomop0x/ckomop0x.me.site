import { gql } from '@apollo/client';

export const detailsPageQuery = gql`
  query DetailsPageQuery($slug: String!, $category: String!) {
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
      date
      updated_at
      description
    }
  }
`;
