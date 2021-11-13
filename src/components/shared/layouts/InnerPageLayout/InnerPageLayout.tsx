import { ReactChild, ReactChildren } from 'react';

import { InnerPageLayoutWrapper } from './styles';

import Footer from 'components/shared/Footer';
import Nav from 'components/shared/Nav';
import SEO from 'components/shared/SEO';
import { GlobalStyle } from 'styles/GlobalStyle';

export interface IInnerPageLayoutProps {
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
  children: any;
}

export default function InnerPageLayout({
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
}: IInnerPageLayoutProps) {
  return (
    <>
      <GlobalStyle />
      <InnerPageLayoutWrapper />
      <SEO
        headTitle={`Ckomop0x.me | ${headTitle}`}
        ogUrl={`https://ckomop0x.me/${ogUrl}/`}
        ogDescription={`Ckomop0x.me | ${ogDescription}`}
        ogImage={ogImage}
        ogImageHeight={ogImageHeight}
        ogImageWidth={ogImageWidth}
        ogLocale={ogLocale}
        ogType={ogType}
        twitterCard={`Ckomop0x.me | ${twitterCard}`}
      />
      <Nav inner={true} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
