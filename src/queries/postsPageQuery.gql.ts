import { gql } from '@apollo/client';

import { postFieldsFragment } from './fragments/postFieldsFragment.gql';

export const postsPageQuery = gql`
  ${postFieldsFragment}

  query PostsPageQuery(
    $category: String!
    $limit: Int!
    $sort: [String]
    $locale: I18NLocaleCode!
  ) {
    posts(
      locale: $locale
      filters: { category: { slug: { eq: $category } } }
      sort: $sort
      status: PUBLISHED
      pagination: { limit: $limit }
    ) {
      ...PostFieldsFragment
    }
  }
`;
