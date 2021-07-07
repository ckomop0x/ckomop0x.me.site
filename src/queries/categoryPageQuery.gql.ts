import { gql } from '@apollo/client';

export const CATEGORY_PAGE_QUERY = gql`
  query categotyPageQuery($category: String!, $limit: Int!) {
    posts(
      where: { category: $category, published: true }
      limit: $limit
      sort: "createdAt:desc"
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
