import { ReactNode } from 'react';

import Footer from 'components/shared/Footer';
import SEO from 'components/shared/SEO';
import { GlobalStyle } from 'styles/GlobalStyle';

export interface IBaseLayoutProps {
  children?: ReactNode | ReactNode[];
}

export default function BaseLayout({ children }: IBaseLayoutProps) {
  return (
    <>
      <GlobalStyle />
      <SEO />
      {children}
      <Footer />
    </>
  );
}
