import styled from 'styled-components';
import { themePalette } from '@styles/colors';

export const Footer = styled.footer`
  margin-top: auto;
  background: ${themePalette.primaryDark};
  color: ${themePalette.textColor};
  padding: 48px 0;

  .copyright {
    font-size: 14px;
    padding: 0;
    margin: 0;
  }

  .link {
    display: inline-flex;
    color: #b0bac2;

    &:hover {
      color: #b0bac2;
      text-decoration: underline;
    }
  }

  .center {
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;


