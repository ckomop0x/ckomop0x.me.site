import React from 'react';

import Header from '@components/blocks/Head';
import Footer from '@components/blocks/Footer';
import { GlobalStyle } from '@styles/GlobalStyle';

const MainPageLayout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainPageLayout;
