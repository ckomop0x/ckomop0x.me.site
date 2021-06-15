import styled from 'styled-components';

import { themePalette } from 'styles/colors';

export const TopLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export const LogoTitle = styled.span`
  font-family: Neucha, sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  color: white;
  user-select: none;
  display: inline-block;
  margin-top: 8px;
`;

export const LogoImage = styled.img`
  border-radius: 50%;
  width: 42px;
  margin-right: 20px;
`;

export const TopMenu = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
`;

export const TopMenuItem = styled.li`
  list-style: none;
`;

export const LinkStyled = styled.a`
  color: ${themePalette.textColorLight};
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${themePalette.textColorLight};
  }
`;

export const Navbar = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-grow: 0;

  &.inner {
    ${TopLogo} {
      color: ${themePalette.primaryTitle};

      ${LogoTitle} {
        color: ${themePalette.primaryTitle};
      }
    }

    ${LinkStyled} {
      color: ${themePalette.primaryTitle};
    }
  }
`;
