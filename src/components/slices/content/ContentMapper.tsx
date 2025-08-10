import { FC } from 'react';

import RichTextContent from 'components/slices/content/RichTextContent/RichTextContent';
import { PostContentDynamicZone } from 'queries/__generated__/graphql';

interface ContentMapperProps {
  Content: PostContentDynamicZone;
}

const ContentMapper: FC<ContentMapperProps> = ({ Content }) => (
  <>
    {Content?.__typename === 'ComponentContentRichText' && (
      <RichTextContent richText={Content.description} />
    )}
  </>
);

export default ContentMapper;
