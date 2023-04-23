import { gql } from '@apollo/client';

import { homePageFragment } from 'queries/fragments/homePageFragment.gql';

export const indexPageQuery = gql`
  ${homePageFragment}
  query IndexPageQuery($locale: I18NLocaleCode!) {
    homePage(publicationState: LIVE, locale: $locale) {
      ...HomePageFragment
    }
  }
`;
