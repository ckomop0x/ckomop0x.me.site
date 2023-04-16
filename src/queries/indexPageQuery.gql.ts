import { gql } from '@apollo/client';

import { homePageFragment } from 'queries/fragments/homePageFragment.gql';
import { postFieldsFragment } from 'queries/fragments/postFieldsFragment.gql';

export const indexPageQuery = gql`
  ${postFieldsFragment}
  ${homePageFragment}
  query IndexPageQuery {
    homePage(publicationState: LIVE, locale: "ru") {
      ...HomePageFragment
    }
    blogItems: posts(
      locale: "ru"
      filters: { category: { slug: { eq: "blog" } } }
      sort: "date:desc"
      publicationState: LIVE
      pagination: { limit: 3 }
    ) {
      ...PostFieldsFragment
    }
    poetryItems: posts(
      locale: "ru"
      filters: { category: { slug: { eq: "poetry" } } }
      sort: "date:desc"
      publicationState: LIVE
      pagination: { limit: 3 }
    ) {
      ...PostFieldsFragment
    }
  }
`;
