import { FC, PropsWithChildren } from 'react';

export const HeroSectionText: FC<PropsWithChildren> = ({ children }) => (
  <div
    className="
      container
      mx-auto
      flex
      grow
      flex-col
      justify-center
      items-start
      px-10
    "
  >
    {children}
  </div>
);

export const Title: FC<PropsWithChildren> = ({ children }) => (
  <h1
    className="
      font-bold
      leading-tight
      text-white
      text-[30px]
      max-w-[400px]
      sm:text-[48px]
    "
    style={{
      fontFamily: 'var(--font-secondary), Roboto, Helvetica, Arial, sans-serif',
    }}
  >
    {children}
  </h1>
);

export const SubTitle: FC<PropsWithChildren> = ({ children }) => (
  <p
    className="
      text-white
      text-[20px]
      leading-[32px]
      mt-6
      max-w-[400px]
      font-normal
    "
    style={{
      fontFamily: 'var(--font-secondary), Roboto, Helvetica, Arial, sans-serif',
    }}
  >
    {children}
  </p>
);
