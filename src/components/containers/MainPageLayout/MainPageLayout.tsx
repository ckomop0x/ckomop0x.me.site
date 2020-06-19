import React from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';
import '@styles/global.scss';

const MainPageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainPageLayout;
