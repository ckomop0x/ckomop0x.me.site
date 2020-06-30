import React from 'react';

import { Navbar, TopLogo, LinkStyled, TopMenu } from './styles';

export interface INavProps {
  inner?: boolean;
}

const Nav: React.FC<INavProps> = ({ inner }) => (
  <Navbar className={`container ${inner ? 'inner' : ''}`}>
    <TopLogo to="/">
      <img src="/images/apple-icon.png" />
      <span>Павел Клочков</span>
    </TopLogo>
    <TopMenu>
      <li>
        <LinkStyled to="/blog/">Блог</LinkStyled>
        <LinkStyled to="/poetry/">Стихи</LinkStyled>
      </li>
    </TopMenu>
  </Navbar>
);

export default Nav;
