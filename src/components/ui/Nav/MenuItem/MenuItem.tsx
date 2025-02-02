import { FC, PropsWithChildren } from 'react';

import { LinkStyled } from 'components/ui/Nav/styles';

interface MenuItemProps {
  linkSrc: string;
  isInner?: boolean;
}

const MenuItem: FC<PropsWithChildren<MenuItemProps>> = ({
  isInner,
  linkSrc,
  children,
}) => (
  <li className="list-none">
    <LinkStyled href={linkSrc} isInner={isInner}>
      {children}
    </LinkStyled>
  </li>
);

export default MenuItem;
