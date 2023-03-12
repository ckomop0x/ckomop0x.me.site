import styled from '@emotion/styled';
import { FC, PropsWithChildren } from 'react';

import Footer from 'components/UI/Footer';
import SEO from 'components/UI/SEO';
import { SEOProps } from 'components/UI/SEO/SEO';

export interface BaseLayoutProps extends SEOProps {
  className?: string;
}

const BaseLayout: FC<PropsWithChildren<BaseLayoutProps>> = ({
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

  /* Layout specific */
  children,
}): JSX.Element => (
  <BaseLayoutWrapper>
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
  </BaseLayoutWrapper>
);

export const BaseLayoutWrapper = styled.div`
  min-height: 100vh;
`;

export default BaseLayout;
