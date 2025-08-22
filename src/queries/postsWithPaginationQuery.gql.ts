import { gql } from '@apollo/client';

import { postFieldsFragment } from './fragments/postFieldsFragment.gql';

export const postsWithPaginationQuery = gql`
  ${postFieldsFragment}

  query PostsWithPaginationQuery(
    $category: String!
    $page: Int!
    $pageSize: Int!
    $sort: [String]
    $locale: I18NLocaleCode!
  ) {
    posts_connection(
      locale: $locale
      filters: { category: { slug: { eq: $category } } }
      sort: $sort
      status: PUBLISHED
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      nodes {
        ...PostFieldsFragment
      }
      pageInfo {
        total
        page
        pageSize
        pageCount
      }
    }
  }
`;
