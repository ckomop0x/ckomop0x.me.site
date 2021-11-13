import { InnerPageLayoutWrapper } from './styles';

import Nav from 'components/shared/Nav';
import BaseLayout, {
  IBaseLayoutProps,
} from 'components/shared/layouts/BaseLayout/BaseLayout';

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
      ogUrl={`https://ckomop0x.me/${ogUrl}/`}
      ogDescription={ogDescription}
      ogImageHeight={ogImageHeight}
      ogImageWidth={ogImageWidth}
      ogLocale={ogLocale}
      ogType={ogType}
      /* Twitter Open Graph */
      twitterCard={twitterCard}
      twitterTitle={twitterTitle}
    >
      <Nav inner={true} />
      <main>
        <InnerPageLayoutWrapper>{children}</InnerPageLayoutWrapper>
      </main>
    </BaseLayout>
  );
}
