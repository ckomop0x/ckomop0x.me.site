import styled from '@emotion/styled';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import { LinkStyled } from 'components/UI/Nav/styles';

interface MenuItemProps {
  linkSrc: string;
}

const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({
  linkSrc,
  children,
}): JSX.Element => (
  <MenuItemWrapper>
    <Link href={linkSrc} passHref legacyBehavior>
      <LinkStyled>{children}</LinkStyled>
    </Link>
  </MenuItemWrapper>
);

export const MenuItemWrapper = styled.li`
  list-style: none;
`;

export default MenuItem;
