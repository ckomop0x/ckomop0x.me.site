import styled from '@emotion/styled';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

export const Content: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col">{children}</div>
);

interface ItemImageProps extends PropsWithChildren {
  background?: string;
}

export const ItemImage: FC<ItemImageProps> = ({ children, background }) => (
  <div className="relative flex items-center justify-center overflow-hidden">
    {background && (
      <div
        className="
          absolute
          inset-0
          z-10
          filter
          blur-[10px]
          opacity-100
        "
        style={{
          backgroundImage: `url(${background}?tr=w-480)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    )}
    {children}
  </div>
);

export const ItemContent: FC<PropsWithChildren> = ({ children }) => (
  <div
    className="
      relative
      p-0
      my-4
      flex
      flex-grow
      flex-col
      justify-between
    "
  >
    {children}
  </div>
);

export const PostWrapper = styled.article`
  padding: 0;

  a:hover {
    text-decoration: none;
  }

  .item__title {
    font-size: 26px;
    text-align: left;
    padding: 10px 20px;
    margin-bottom: 1rem;
    font-weight: 500;
    line-height: 1;
    margin-top: 0;
  }

  .item__content {
    text-align: left;
    line-height: 1.3;
    padding: 0 20px;
    font-family: Roboto, sans-serif;
    font-weight: 400;

    p {
      color: #747474;
      font-size: 14px;
    }

    .link {
      text-align: center;
    }
  }
`;

export const PostTitle: FC<PropsWithChildren> = ({ children }) => (
  <h3
    className="
      flex
      items-center
      justify-center
      absolute
      z-10
      text-[23px]
      text-center
      min-h-[80px]
      w-full
      px-[20px]
      pr-[100px]
      text-[#513b34]
      font-medium
      leading-none
      m-0
      bottom-0
      bg-white/90
      var(--font-secondary)
    "
  >
    {children}
  </h3>
);
