import { gql } from '@apollo/client';

import { categoryFieldsFragment } from './fragments/categoryFieldsFragment.gql';
import { postFieldsFragment } from './fragments/postFieldsFragment.gql';

export const categoryPageQuery = gql`
  ${postFieldsFragment}
  ${categoryFieldsFragment}

  query CategoryPageQuery($category: String!, $limit: Int!) {
    posts(
      where: { category: $category, published: true }
      limit: $limit
      sort: "date:desc"
    ) {
      ...PostFieldsFragment
    }
    categories {
      ...CategoryFieldsFragment
    }
  }
`;
