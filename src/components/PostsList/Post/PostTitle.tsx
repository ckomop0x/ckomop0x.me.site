import { FC, PropsWithChildren } from 'react';

export const PostTitle: FC<PropsWithChildren> = ({ children }) => {
  const className =
    'flex items-center justify-center absolute z-10 text-[23px] text-center min-h-[80px] w-full px-[20px] pr-[100px]  text-[#513b34] font-medium leading-none   m-0   bottom-0   bg-white/90   var(--font-secondary)'

  return <h3 className={className}>{children}</h3>;
}
