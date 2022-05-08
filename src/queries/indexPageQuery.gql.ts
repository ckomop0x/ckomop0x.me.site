import { gql } from '@apollo/client';

import { categoryFieldsFragment } from 'queries/fragments/categoryFieldsFragment.gql';
import { postFieldsFragment } from 'queries/fragments/postFieldsFragment.gql';

export const indexPageQuery = gql`
  ${postFieldsFragment}
  ${categoryFieldsFragment}
  query IndexPageQuery {
    blogItems: posts(
      where: { category: "blog", published: true }
      limit: 3
      sort: "date:desc"
    ) {
      ...PostFieldsFragment
    }
    poetryItems: posts(
      where: { category: "poetry", published: true }
      limit: 3
      sort: "date:desc"
    ) {
      ...PostFieldsFragment
    }
    categories {
      ...CategoryFieldsFragment
    }
  }
`;
