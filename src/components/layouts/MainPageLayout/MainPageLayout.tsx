import React from 'react';

import Footer from 'components/shared/Footer';
import SEO from 'components/shared/SEO';
import { GlobalStyle } from 'styles/GlobalStyle';

const MainPageLayout: React.FC = ({ children }): JSX.Element => (
  <>
    <GlobalStyle />
    <SEO />
    {children}
    <Footer />
  </>
);

export default MainPageLayout;
