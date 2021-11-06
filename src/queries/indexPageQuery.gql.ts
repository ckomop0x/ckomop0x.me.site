import { gql } from '@apollo/client';

export const INDEX_PAGE_QUERY = gql`
  query INDEX_PAGE_QUERY {
    featured: posts(
      where: { featured: true, published: true }
      limit: 1
      sort: "date:desc"
    ) {
      ...PostFields
    }
    blogItems: posts(
      where: { category: "blog", published: true }
      limit: 3
      sort: "date:desc"
    ) {
      ...PostFields
    }
    poetryItems: posts(
      where: { category: "poetry", published: true }
      limit: 3
      sort: "date:desc"
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
    date
    created_at
    updated_at
    title
    featured
  }

  fragment CategoryFields on Category {
    id
    title
    slug
  }
`;
