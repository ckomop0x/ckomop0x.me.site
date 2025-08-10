import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

interface RichTextContentProps {
  richText: string | null | undefined;
}

const RichTextContent: FC<RichTextContentProps> = ({ richText }) => (
  <>{richText && <ReactMarkdown>{richText}</ReactMarkdown>}</>
);

export default RichTextContent;
