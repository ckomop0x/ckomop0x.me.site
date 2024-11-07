import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface LogoProps {
  imgSrc: string;
  title: string;
  linkSrc: string;
}

const Logo: FC<LogoProps> = ({ imgSrc, linkSrc, title }) => (
  <Link
    href={linkSrc}
    className="flex items-center justify-center cursor-pointer hover:no-underline hover:text-white"
  >
    <Image
      src={imgSrc}
      alt={title}
      width={42}
      height={42}
      data-testid="logo-image"
      className="rounded-full"
    />
    <span
      className="font-secondary uppercase text-[16px] text-white select-none inline-block mt-2 ml-2.5"
      style={{
        fontFamily: 'var(--font-secondary), sans-serif',
        textTransform: 'uppercase',
      }}
    >
      {title}
    </span>
  </Link>
);

// export const LogoWrapper = styled(Link)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//
//   &:hover {
//     text-decoration: none;
//     color: white;
//   }
// `;

export const LogoWrapper = ({ href, children }) => (
  <Link
    href={href}
    className="
      flex
      items-center
      justify-center
      cursor-pointer
      hover:no-underline
      hover:text-white
    "
  >
    {children}
  </Link>
);

export default Logo;
