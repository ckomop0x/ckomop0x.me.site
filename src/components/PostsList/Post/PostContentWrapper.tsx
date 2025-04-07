import { FC, PropsWithChildren } from 'react';

export const PostContentWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div
    className="
      relative
      m-8
      bg-[#f5f5f5c2]
      w-full
      shadow
      shadow-[0_0_4px_#0000001c]
      flex
      flex-col
      transition-shadow
      duration-300
      ease-in-out
      hover:shadow-[0_0_20px_rgba(0,0,0,0.11)]
    "
  >
    {children}
  </div>
);
