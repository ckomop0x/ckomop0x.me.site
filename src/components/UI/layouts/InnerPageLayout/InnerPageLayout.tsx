import styled from 'styled-components';

import Nav from 'components/UI/Nav';
import BaseLayout, {
  IBaseLayoutProps,
} from 'components/UI/layouts/BaseLayout/BaseLayout';

export type IInnerPageLayoutProps = IBaseLayoutProps;

export default function InnerPageLayout({
  /* Primary meta settings */
  author,
  articleAuthor,
  headTitle,

  /* Facebook Open Graph */
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
}: IInnerPageLayoutProps) {
  return (
    <BaseLayout
      /* Primary meta settings */
      author={author}
      articleAuthor={articleAuthor}
      headTitle={headTitle}
      /* Facebook Open Graph */
      ogImage={ogImage}
      ogUrl={`https://ckomop0x.me/${ogUrl}`}
      ogDescription={ogDescription}
      ogImageHeight={ogImageHeight}
      ogImageWidth={ogImageWidth}
      ogLocale={ogLocale}
      ogType={ogType}
      /* Twitter Open Graph */
      twitterCard={twitterCard}
      twitterTitle={twitterTitle}
    >
      <Nav isInner={true} />
      <InnerPageLayoutWrapper>{children}</InnerPageLayoutWrapper>
    </BaseLayout>
  );
}

export const InnerPageLayoutWrapper = styled.main`
  color: #a5a5a5;
`;
