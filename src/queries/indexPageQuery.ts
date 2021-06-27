import { gql } from '@apollo/client';

export const INDEX_PAGE_QUERY = gql`
  query IndexPageQuery {
    featured: posts(where: { featured: true, published: true }, limit: 1) {
      ...PostFields
    }
    blogItems: posts(where: { category: "blog", published: true }, limit: 3) {
      ...PostFields
    }
    poetryItems: posts(
      where: { category: "poetry", published: true }
      limit: 3
    ) {
      ...PostFields
    }
    categories {
      ...CategoryFields
    }
  }

  fragment PostFields on Post {
    category
    image_url
    slug
    published
    id
    excerpt
    createdAt
    updatedAt
    title
    featured
  }

  fragment CategoryFields on Category {
    id
    name
    slug
  }
`;
