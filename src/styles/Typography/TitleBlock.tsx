import { FC, PropsWithChildren } from 'react';

export const TitleBlock: FC<PropsWithChildren> = ({ children }) => (
  <h2
    className="
      text-[40px]
      font-medium
      tracking-normal
      uppercase
      text-[#312420]
      border-b-2
      border-[#3124205e]
    "
    style={{ fontFamily: 'var(--font-secondary), Roboto, sans-serif' }}
  >
    {children}
  </h2>
);
