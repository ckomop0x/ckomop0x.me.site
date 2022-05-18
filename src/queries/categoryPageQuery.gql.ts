import { gql } from '@apollo/client';

import { categoryFieldsFragment } from './fragments/categoryFieldsFragment.gql';
import { postFieldsFragment } from './fragments/postFieldsFragment.gql';

export const categoryPageQuery = gql`
  ${postFieldsFragment}
  ${categoryFieldsFragment}

  query CategoryPageQuery($category: String!, $limit: Int!) {
    posts(
      locale: "ru"
      filters: { category: { slug: { eq: $category } } }
      sort: "date:desc"
      publicationState: LIVE
      pagination: { limit: $limit }
    ) {
      ...PostFieldsFragment
    }
  }
`;
