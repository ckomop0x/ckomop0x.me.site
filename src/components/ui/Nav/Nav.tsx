import { FC } from 'react';

import { Navbar } from './styles';

import MenuItem from '@/components/ui/Nav/MenuItem';
import Logo from 'components/ui/Nav/Logo';

export interface NavProps {
  isInner?: boolean;
}

const Nav: FC<NavProps> = ({ isInner }): JSX.Element => (
  <Navbar>
    <Logo imgSrc="/images/apple-icon.png" title="Павел Клочков" linkSrc="/" />
    <ul className="m-0 flex items-center">
      <MenuItem linkSrc="/blog/" isInner={isInner}>
        Блог
      </MenuItem>
      <MenuItem linkSrc="/poetry/" isInner={isInner}>
        Стихи
      </MenuItem>
    </ul>
  </Navbar>
);

export default Nav;
