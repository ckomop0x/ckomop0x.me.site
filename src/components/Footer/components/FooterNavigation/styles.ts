import styled from 'styled-components';
import { themePalette } from '@styles/colors';

export const FooterNav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  &--item {
    position: relative;
    height: 100%;
    align-self: stretch;

    a {
      position: relative;
      background: transparent;
      padding: 0 16px;
      margin: 0;
      height: 100%;
      display: inline-flex;
      align-items: center;
      white-space: normal;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: -0.5px;
      text-transform: capitalize;
      color: #FFF;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        text-decoration: none;
        color: ${themePalette.primaryRed};
      }
    }
  }
`
