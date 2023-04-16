import { FC } from 'react';

interface FacebookMetaProps {
  metaArticleAuthor: string;
  metaFbAppId: string;
  metaOgImage: string;
  metaOgUrl: string;
  metaOgType: string;
  metaOgTitle: string;
  metaOgDescription: string;
}

const FacebookMeta: FC<FacebookMetaProps> = ({
  metaArticleAuthor,
  metaFbAppId,
  metaOgImage,
  metaOgUrl,
  metaOgType,
  metaOgTitle,
  metaOgDescription,
}) => (
  <>
    {metaArticleAuthor && (
      <meta property="article:author" content={metaArticleAuthor} />
    )}
    {metaFbAppId && <meta property="fb:app_id" content={metaFbAppId} />}
    {metaOgImage && <meta property="og:image" content={metaOgImage} />}
    {metaOgUrl && <meta property="og:url" content={metaOgUrl} />}
    {metaOgType && <meta property="og:type" content={metaOgType} />}
    {metaOgTitle && <meta property="og:title" content={metaOgTitle} />}
    {metaOgDescription && (
      <meta property="og:description" content={metaOgDescription} />
    )}
  </>
);

export default FacebookMeta;
