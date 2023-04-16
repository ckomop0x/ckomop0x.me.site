import { gql } from '@apollo/client';

export const homePageFragment = gql`
  fragment HomePageFragment on HomePageEntityResponse {
    data {
      id
      attributes {
        title
        hero {
          id
          title
          callToAction
          image
        }
      }
    }
  }
`;
