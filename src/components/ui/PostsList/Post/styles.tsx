import styled from '@emotion/styled';
import { FC, PropsWithChildren } from 'react';

export const PostWrapper = styled.article`
  padding: 0;

  a:hover {
    text-decoration: none;
  }

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
