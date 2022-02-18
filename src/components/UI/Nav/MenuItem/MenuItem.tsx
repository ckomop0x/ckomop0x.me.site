import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

import { LinkStyled } from 'components/UI/Nav/styles';

interface MenuItemProps {
  linkSrc: string;
  children: string;
}

const MenuItem: FC<MenuItemProps> = ({ linkSrc, children }): JSX.Element => (
  <MenuItemWrapper>
    <Link href={linkSrc} passHref>
      <LinkStyled>{children}</LinkStyled>
    </Link>
  </MenuItemWrapper>
);

export const MenuItemWrapper = styled.li`
  list-style: none;
`;

export default MenuItem;
