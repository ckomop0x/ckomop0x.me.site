import InnerPageLayout from 'components/shared/layouts/InnerPageLayout';
import { IInnerPageLayoutProps } from 'components/shared/layouts/InnerPageLayout/InnerPageLayout';

export interface ICategoryLayoutProps extends IInnerPageLayoutProps {
  proppy?: any;
}

export default function CategoryLayout({
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
}: ICategoryLayoutProps) {
  return (
    <InnerPageLayout
      headTitle={`Ckomop0x.me | ${headTitle}`}
      ogUrl={`https://ckomop0x.me/${ogUrl}/`}
      ogDescription={`Ckomop0x.me | ${ogDescription}`}
      ogImage={ogImage}
      ogImageHeight={ogImageHeight}
      ogImageWidth={ogImageWidth}
      ogLocale={ogLocale}
      ogType={ogType}
      twitterCard={`Ckomop0x.me | ${twitterCard}`}
    >
      <div className="container">{children}</div>
    </InnerPageLayout>
  );
}
