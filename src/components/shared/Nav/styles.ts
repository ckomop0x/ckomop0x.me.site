import { Link } from 'gatsby';
import styled from 'styled-components';

import { themePalette } from 'styles/colors';

export const TopLogo = styled(Link)`
  display: flex;
  align-items: center;

  span {
    font-family: Neucha, sans-serif;
    text-transform: uppercase;
    font-size: 16px;
    color: white;
    user-select: none;
    display: inline-block;
    margin-top: 8px;
  }

  &:hover {
    text-decoration: none;
    color: white;
  }

  img {
    border-radius: 50%;
    width: 42px;
    margin-right: 20px;
  }
`;

export const TopMenu = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;

  li {
    list-style: none;
  }
`;

export const LinkStyled = styled(Link)`
  color: ${themePalette.textColorLight};
  display: inline-block;
  margin-left: 20px;

  &:hover {
    color: ${themePalette.textColorLight};
  }
`;

// color: #312400;

export const Navbar = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-grow: 0;

  &.inner {
    ${TopLogo} {
      color: ${themePalette.primaryTitle};

      span {
        color: ${themePalette.primaryTitle};
      }
    }

    ${LinkStyled} {
      color: ${themePalette.primaryTitle};
    }
  }
`;
