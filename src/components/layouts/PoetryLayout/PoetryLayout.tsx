import React from 'react';

import { PoetryLayoutStyled } from './styles';

import Footer from 'components/shared/Footer';
import Nav from 'components/shared/Nav';
import SEO from 'components/shared/SEO';
import { GlobalStyle } from 'styles/GlobalStyle';

export interface IProjectsLayoutProps {
  articleAuthor?: string;
  headTitle?: string | null;
  ogUrl?: string;
  ogImage?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  ogDescription?: string | null;
  ogLocale?: string;
  ogSiteName?: string;
  ogType?: string;
  twitterCard?: string | null;
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
}) => (
  <>
    <GlobalStyle />
    <PoetryLayoutStyled>
      <SEO
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
      <Nav inner={true} />
      <main>{children}</main>
      <Footer />
    </PoetryLayoutStyled>
  </>
);

export default PoetryLayout;
