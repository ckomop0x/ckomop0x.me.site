import { ReactNode } from 'react';

import Footer from 'components/shared/Footer';
import SEO from 'components/shared/SEO';
import { ISEOProps } from 'components/shared/SEO/SEO';
import { GlobalStyle } from 'styles/GlobalStyle';

export interface IBaseLayoutProps extends ISEOProps {
  children?: ReactNode | ReactNode[];
}

export default function BaseLayout({
  /* Primary meta settings */
  author,
  articleAuthor,
  headTitle,

  /* Facebook Open Graph */
  fbAppId,
  ogImage,
  ogType,
  ogTitle,
  ogUrl,
  ogImageWidth,
  ogImageHeight,
  ogDescription,
  ogLocale,
  ogSiteName,

  /* Twitter Open Graph */
  twitterCard,
  twitterSite,
  twitterCreator,
  twitterTitle,

  children,
}: IBaseLayoutProps) {
  return (
    <>
      <GlobalStyle />
      <SEO
        /* Primary meta settings */
        author={author}
        articleAuthor={articleAuthor}
        headTitle={headTitle}
        /* Facebook Open Graph */
        fbAppId={fbAppId}
        ogImage={ogImage}
        ogType={ogType}
        ogTitle={ogTitle}
        ogUrl={ogUrl}
        ogImageWidth={ogImageWidth}
        ogImageHeight={ogImageHeight}
        ogDescription={ogDescription}
        ogLocale={ogLocale}
        ogSiteName={ogSiteName}
        /* Twitter Open Graph */
        twitterCard={twitterCard}
        twitterSite={twitterSite}
        twitterCreator={twitterCreator}
        twitterTitle={twitterTitle}
      />
      {children}
      <Footer />
    </>
  );
}
