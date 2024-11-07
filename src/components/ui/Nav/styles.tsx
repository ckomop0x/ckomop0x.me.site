import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

import { LogoWrapper } from 'components/ui/Nav/Logo/Logo';
import { MenuItemWrapper } from 'components/ui/Nav/MenuItem/MenuItem';
import { NavProps } from 'components/ui/Nav/Nav';
import { themePalette } from 'styles/colors';

export const LinkStyled = ({ href, children, isInner }) => (
  <Link
    href={href}
    className={`inline-block ml-5 cursor-pointer no-underline transition-colors ${isInner ? 'text-gray-800' : 'text-white'}`}
  >
    {children}
  </Link>
);

// export const Navbar = styled.nav<NavProps>`
//   height: 60px;
//   display: flex;
//   justify-content: space-between;
//   flex-grow: 0;
//
//   ${({ isInner }) =>
//     isInner &&
//     css`
//       ${LogoWrapper} {
//         color: ${themePalette.primaryTitle};
//
//         ${LogoTitle} {
//           color: ${themePalette.primaryTitle};
//         }
//       }
//
//       ${MenuItemWrapper} {
//         ${LinkStyled} {
//           color: ${themePalette.primaryTitle};
//         }
//       }
//     `}
// `;

export const Navbar = ({ children }) => (
  <nav className="container mx-auto h-[60px] flex justify-between flex-grow-0">
    {children}
  </nav>
);
