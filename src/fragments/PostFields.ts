import { graphql } from 'gatsby';

export const PostFields = graphql`
  fragment PostFields on StrapiPosts {
    category
    image_url
    slug
    published
    strapiId
    excerpt
    createdAt
    updatedAt
    title
    featured
  }
`;
