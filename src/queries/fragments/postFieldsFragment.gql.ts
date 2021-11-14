import { gql } from '@apollo/client';

export const postFieldsFragment = gql`
  fragment PostFieldsFragment on Post {
    category
    image_url
    slug
    published
    id
    excerpt
    date
    updated_at
    title
    featured
  }
`;
