import Link from 'next/link';
import React from 'react';

import {
  Navbar,
  TopLogo,
  LinkStyled,
  TopMenu,
  LogoImage,
  LogoTitle,
  TopMenuItem,
} from './styles';

export interface INavProps {
  inner?: boolean;
}

export default function Nav({ inner }: INavProps) {
  return (
    <Navbar className={`container ${inner ? 'inner' : ''}`}>
      <Link href="/">
        <TopLogo>
          <LogoImage src="/images/apple-icon.png" alt="Павел Клочков" />
          <LogoTitle>Павел Клочков</LogoTitle>
        </TopLogo>
      </Link>
      <TopMenu>
        <TopMenuItem>
          <Link href="/blog/">
            <LinkStyled>Блог</LinkStyled>
          </Link>
        </TopMenuItem>
        <TopMenuItem>
          <Link href="/poetry/">
            <LinkStyled>Стихи</LinkStyled>
          </Link>
        </TopMenuItem>
      </TopMenu>
    </Navbar>
  );
}
