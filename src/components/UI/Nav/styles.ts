import styled, { css } from 'styled-components';

import { LogoTitle, LogoWrapper } from 'components/UI/Nav/Logo/Logo';
import { MenuItemWrapper } from 'components/UI/Nav/MenuItem/MenuItem';
import { INavProps } from 'components/UI/Nav/Nav';
import { themePalette } from 'styles/colors';

export const LinkStyled = styled.a`
  color: ${themePalette.textColorLight};
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${themePalette.textColorLight};
  }
`;

export const Navbar = styled.nav<INavProps>`
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-grow: 0;

  ${({ isInner }) =>
    isInner &&
    css`
      ${LogoWrapper} {
        color: ${themePalette.primaryTitle};

        ${LogoTitle} {
          color: ${themePalette.primaryTitle};
        }
      }

      ${MenuItemWrapper} {
        ${LinkStyled} {
          color: ${themePalette.primaryTitle};
        }
      }
    `}
`;
