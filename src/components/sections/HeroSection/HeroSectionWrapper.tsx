import { FC, ReactNode } from 'react';

export interface HeroSectionWrapperProps {
  backgroundImage?: string;
  children: ReactNode;
}

export const HeroSectionWrapper: FC<HeroSectionWrapperProps> = ({
  backgroundImage,
  children,
}) => (
  <section
    style={{
      background: `radial-gradient(ellipse at 80% 50%, #00000010, #00000080) 100% 50%, url(${backgroundImage}?tr=w-2000) no-repeat`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    className="h-screen max-h-full flex flex-col text-white"
  >
    {children}
  </section>
);
