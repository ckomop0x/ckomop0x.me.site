import { FC } from 'react';

import RichTextContent from 'components/slices/content/RichTextContent/RichTextContent';
import { DetailsPageQuery_posts_data_attributes_Content } from 'queries/types/DetailsPageQuery';

interface ContentMapperProps {
  Content: DetailsPageQuery_posts_data_attributes_Content;
}

const ContentMapper: FC<ContentMapperProps> = ({ Content }) => (
  <>
    {Content?.__typename === 'ComponentContentRichText' && (
      <RichTextContent richText={Content.description} />
    )}
  </>
);

export default ContentMapper;
