import React from 'react';

import { Navbar, TopLogo, LinkStyled, TopMenu } from './styles';

export interface INavProps {
  title: string;
  inner?: boolean;
}

const Nav: React.FC<INavProps> = ({ title, inner }) => {
  return (
    <Navbar className="container">
      <TopLogo to="/" inner={inner}>
        {title}
      </TopLogo>
      <TopMenu>
        <li>
          <LinkStyled to="/blog/" inner={inner}>
            Блог
          </LinkStyled>
          <LinkStyled to="/poetry/" inner={inner}>
            Стихи
          </LinkStyled>
        </li>
      </TopMenu>
    </Navbar>
  );
};

export default Nav;
