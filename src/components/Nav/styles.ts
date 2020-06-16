import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { themePalette } from '@styles/colors';

interface IStyledLink {
  inner?: boolean;
}

export const Navbar = styled.nav`
  height: 120px;
  display: flex;
  justify-content: space-between;
  flex-grow: 0;
`;

export const TopLogo = styled(Link)`
  font-family: 'Pacifico', sans-serif;
  font-size: 28px;
  color: white;
  user-select: none;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: none;
    color: white;
  }

  ${({ inner }: IStyledLink) =>
    inner
      ? css`
          color: #312420;

          &:hover {
            color: #312400;
          }
        `
      : ''}
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

  ${({ inner }: IStyledLink) =>
    inner
      ? css`
          color: #312420;

          &:hover {
            color: #312400;
          }
        `
      : ''}
`;
