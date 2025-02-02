import { FC, PropsWithChildren } from 'react';

import { themePalette } from 'styles/colors';

interface DetailItemWrapperProps extends PropsWithChildren {
  image: string | null;
}

export const DetailItemWrapper: FC<DetailItemWrapperProps> = ({
  children,
  image,
}) => (
  <div
    className="relative bg-cover bg-center bg-no-repeat min-h-[calc(100vh-130px)] py-10"
    style={{
      backgroundImage: image ? `url(${image}?tr=h-960)` : undefined,
    }}
  >
    {/* eslint-disable-next-line react/no-unknown-property */}
    <style jsx>{`
      @media (min-width: 700px) {
        div {
          background-image: url(${image}?tr=w-900);
        }
      }
      @media (min-width: 1200px) {
        div {
          background-image: url(${image}?tr=w-2000);
        }
      }
    `}</style>
    {children}
  </div>
);

export const Content: FC<PropsWithChildren> = ({ children, className }) => (
  <div
    className={`
      p-5
      bg-[rgba(252,251,248,0.95)]
      md:max-w-[800px]
      md:mx-auto
      md:py-6
      md:px-12
      md:shadow-md

      ${className}
    `}
  >
    {children}
  </div>
);
