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
    className={`inline-block ml-5 cursor-pointer underline transition-colors ${isInner ? 'text-gray-800' : 'text-white'}`}
  >
    {children}
  </Link>
);

export const Navbar: FC<PropsWithChildren> = ({ children }) => (
  <nav className="w-full h-[60px] flex justify-between px-10">{children}</nav>
);
