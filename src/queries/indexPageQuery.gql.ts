import { gql } from '@apollo/client';

import { postFieldsFragment } from 'queries/fragments/postFieldsFragment.gql';

export const indexPageQuery = gql`
  ${postFieldsFragment}
  query IndexPageQuery {
    blogItems: posts(
      locale: "ru"
      filters: { category: { Slug: { eq: "blog" } } }
      sort: "date:desc"
      publicationState: LIVE
      pagination: { limit: 3 }
    ) {
      ...PostFieldsFragment
    }
    poetryItems: posts(
      locale: "ru"
      filters: { category: { Slug: { eq: "poetry" } } }
      sort: "date:desc"
      publicationState: LIVE
      pagination: { limit: 3 }
    ) {
      ...PostFieldsFragment
    }
  }
`;
