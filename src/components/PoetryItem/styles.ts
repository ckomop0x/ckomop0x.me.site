import styled from 'styled-components';
import { themePalette } from '@styles/colors';

export const Title = styled.div`
  padding: 50px 0 50px;
  background-color: #292929;
`;

export const Content = styled.div`
  max-width: 500px;
  margin: 40px auto;

  h2 {
    color: #fff;
    padding: 40px 0 20px;
    font-size: 26px;
    font-weight: 700;
  }

  p {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 26px;
    margin: 0 0 20px;
    color: ${themePalette.primaryTitle};
  }
`;
