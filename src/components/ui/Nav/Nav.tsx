import { FC } from 'react';

import { Navbar } from './styles';

import Logo from 'components/ui/Nav/Logo';
import TopMenu from 'components/ui/Nav/TopMenu';

export interface NavProps {
  isInner?: boolean;
}

const Nav: FC<NavProps> = ({ isInner }): JSX.Element => (
  <Navbar className="container" isInner={isInner}>
    <Logo imgSrc="/images/apple-icon.png" title="Павел Клочков" linkSrc="/" />
    <TopMenu />
  </Navbar>
);

export default Nav;
