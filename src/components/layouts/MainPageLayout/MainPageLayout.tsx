import React from 'react';

import Footer from 'components/shared/Footer';
import Header from 'components/shared/Head';
import { GlobalStyle } from 'styles/GlobalStyle';

const MainPageLayout: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </>
);

export default MainPageLayout;
