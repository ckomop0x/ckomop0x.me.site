import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface LogoProps {
  imgSrc: string;
  title: string;
  linkSrc: string;
}

export default function Logo({
  imgSrc,
  linkSrc,
  title,
}: LogoProps): JSX.Element {
  return (
    <Link href={linkSrc}>
      <LogoWrapper>
        <LogoImage src={imgSrc} alt={title} width={42} height={42} />
        <LogoTitle>{title}</LogoTitle>
      </LogoWrapper>
    </Link>
  );
}

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
