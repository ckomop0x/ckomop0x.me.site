import styled from 'styled-components';
import { themePalette } from '@styles/colors';

export const Footer = styled.footer`
  margin-top: auto;
  background: hsla(38, 20%, 80%, 1);
  color: ${themePalette.primaryTitle};
  padding: 32px 0;

  .copyright {
    font-size: 16px;
    padding: 0;
    margin: 0;
  }
`;
