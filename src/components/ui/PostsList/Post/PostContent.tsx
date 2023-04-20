import styled from '@emotion/styled';
import { FC } from 'react';

import PostDate from 'components/ui/PostsList/Post/PostDate';
import { PostTitle } from 'components/ui/PostsList/Post/styles';
import getSrcSet from 'utils/image/getSrcSet';

interface PostContentProps {
  title: string;
  image?: string;
  publicationDate?: string;
}

const PostContent: FC<PostContentProps> = ({
  image,
  publicationDate,
  title,
}) => (
  <PostContentWrapper>
    {!!image && (
      <PostImage
        loading="lazy"
        src={`${image}`}
        srcSet={getSrcSet(image)}
        sizes="(max-width: 600px) 480px, 600px"
        alt={title}
      />
    )}
    {publicationDate && <PostDate publicationDate={publicationDate} />}
    <PostTitle>{title}</PostTitle>
  </PostContentWrapper>
);

export const PostContentWrapper = styled.div`
  position: relative;
  margin: 32px;
  background-color: #f5f5f5c2;
  width: 100%;
  box-shadow: 0 0 4px #0000001c;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.11);
  }
`;

export const PostImage = styled.img`
  width: 100%;
  overflow: hidden;
`;

export default PostContent;
