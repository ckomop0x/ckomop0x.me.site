import React from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';
import '@styles/global.scss';

export interface ILayoutContainerProps {
  children: any;
}

const MainPageLayout: React.FC<ILayoutContainerProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainPageLayout;
