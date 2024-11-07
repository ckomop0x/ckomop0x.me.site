import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

interface LinkStyledProps {
  href: string;
  isInner?: boolean;
}

export const LinkStyled: FC<PropsWithChildren<LinkStyledProps>> = ({
  href,
  children,
  isInner,
}) => (
  <Link
    href={href}
    className={`inline-block ml-5 cursor-pointer no-underline transition-colors ${isInner ? 'text-gray-800' : 'text-white'}`}
  >
    {children}
  </Link>
);

export const Navbar: FC<PropsWithChildren> = ({ children }) => (
  <nav className="container mx-auto h-[60px] flex justify-between flex-grow-0">
    {children}
  </nav>
);
