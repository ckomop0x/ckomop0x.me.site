import { FC, PropsWithChildren } from 'react';

export const SubtitleBlock: FC<PropsWithChildren> = ({ children }) => (
  <h4
    className="
      text-center
      max-w-[500px]
      mx-auto
    "
  >
    {children}
  </h4>
);
