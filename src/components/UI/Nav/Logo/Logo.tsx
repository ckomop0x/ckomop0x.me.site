import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface LogoProps {
  imgSrc: string;
  title: string;
  linkSrc: string;
}

const Logo: FC<LogoProps> = ({ imgSrc, linkSrc, title }): JSX.Element => (
  <Link href={linkSrc} passHref legacyBehavior>
    <LogoWrapper>
      <LogoImage
        src={imgSrc}
        alt={title}
        width={42}
        height={42}
        data-testid="logo-image"
      />
      <LogoTitle>{title}</LogoTitle>
    </LogoWrapper>
  </Link>
);

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export const LogoImage = styled(Image)`
  border-radius: 50%;
`;

export const LogoTitle = styled.span`
  font-family: Neucha, sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  color: white;
  user-select: none;
  display: inline-block;
  margin-top: 8px;
  margin-left: 20px;
`;

export default Logo;
