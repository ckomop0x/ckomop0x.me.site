import { FC, PropsWithChildren } from 'react';

import styles from './DetailItemWrapper.module.css';

interface DetailItemWrapperProps extends PropsWithChildren {
  image: string | null;
}

export const DetailItemWrapper: FC<DetailItemWrapperProps> = ({
  children,
  image,
}) => {
  const styleVars = {
    '--bg-image-700': image ? `url(${image}?tr=w-1200)` : 'none',
    '--bg-image-1200': image ? `url(${image}?tr=w-2000)` : 'none',
  } as React.CSSProperties;

  return (
    <div
      className={`relative bg-cover bg-center bg-no-repeat min-h-[calc(100vh-130px)] py-10  ${styles.bgImage}`}
      style={styleVars}
    >
      {children}
    </div>
  );
}
