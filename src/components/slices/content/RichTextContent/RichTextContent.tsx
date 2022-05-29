import parse from 'html-react-parser';
import { FC } from 'react';

interface RichTextContentProps {
  richText: string | null;
}

const RichTextContent: FC<RichTextContentProps> = ({ richText }) => (
  <>{richText && parse(richText)}</>
);

export default RichTextContent;
