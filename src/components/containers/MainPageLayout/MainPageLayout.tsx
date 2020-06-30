import React from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';
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
