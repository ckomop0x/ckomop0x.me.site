import { FC, PropsWithChildren } from 'react';

export const Content: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => (
  <div
    className={`
      p-5
      bg-[rgba(252,251,248,0.7)]
      md:max-w-[800px]
      md:mx-auto
      md:py-6
      md:px-12
      md:shadow-md
       rounded-2xl shadow-lg backdrop-blur-sm

      ${className}
    `}
  >
    {children}
  </div>
);
