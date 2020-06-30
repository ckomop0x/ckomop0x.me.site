import React from 'react';

import Nav from '@components/Nav';
import Footer from '@components/Footer';
import Header from '@components/Header';

import { PoetryLayoutStyled } from './styles';
import { GlobalStyle } from '@styles/GlobalStyle';

export interface IProjectsLayoutProps {
  articleAuthor?: string;
  headTitle?: string;
  ogUrl?: string;
  ogImage?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  ogDescription?: string;
  ogLocale?: string;
  ogSiteName?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  author?: string;
  yandexVerification?: string;
  googleSiteVerification?: string;
}

const PoetryLayout: React.FC<IProjectsLayoutProps> = ({
  children,
  headTitle,
  ogUrl,
  ogImage,
  ogImageHeight,
  ogImageWidth,
  ogDescription,
  ogLocale,
  ogType,
  twitterCard,
}) => {
  return (
    <>
      <GlobalStyle />
      <PoetryLayoutStyled>
        <Header
          headTitle={headTitle}
          ogUrl={ogUrl}
          ogImage={ogImage}
          ogImageHeight={ogImageHeight}
          ogImageWidth={ogImageWidth}
          ogDescription={ogDescription}
          ogLocale={ogLocale}
          ogType={ogType}
          twitterCard={twitterCard}
        />
        <Nav title="Ckomop0x.me" inner />
        <main>{children}</main>
        <Footer />
      </PoetryLayoutStyled>
    </>
  );
};

export default PoetryLayout;
