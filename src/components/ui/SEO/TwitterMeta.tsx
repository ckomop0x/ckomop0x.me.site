import { FC } from 'react';

interface TwitterMetaProps {
  metaTwitterCard: string;
  metaTwitterCreator: string;
  metaTwitterTitle: string;
  metaOgDescription: string;
  metaOgImage: string;
}

const TwitterMeta: FC<TwitterMetaProps> = ({
  metaTwitterCard,
  metaTwitterCreator,
  metaTwitterTitle,
  metaOgDescription,
  metaOgImage,
}): JSX.Element => (
  <>
    {metaTwitterCard && <meta name="twitter:card" content={metaTwitterCard} />}
    {metaTwitterCreator && (
      <meta name="twitter:creator" content={metaTwitterCreator} />
    )}

    {metaTwitterTitle && (
      <meta name="twitter:title" content={metaTwitterTitle} />
    )}
    <meta name="twitter:description" content={metaOgDescription} />
    <meta name="twitter:image" content={metaOgImage} />
  </>
);

export default TwitterMeta;
