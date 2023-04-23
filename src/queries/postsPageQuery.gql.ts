import { gql } from '@apollo/client';

import { categoryFieldsFragment } from './fragments/categoryFieldsFragment.gql';
import { postFieldsFragment } from './fragments/postFieldsFragment.gql';

export const postsPageQuery = gql`
  ${postFieldsFragment}
  ${categoryFieldsFragment}

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
      publicationState: LIVE
      pagination: { limit: $limit }
    ) {
      ...PostFieldsFragment
    }
  }
`;
