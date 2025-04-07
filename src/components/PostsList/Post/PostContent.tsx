import Image from 'next/image';
import { FC } from 'react';

import { PostContentWrapper } from './PostContentWrapper';
import { PostDate } from './PostDate';
import { PostTitle } from './PostTitle';

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
      <div className="overflow-hidden w-full h-full flex justify-center">
        <Image
          alt={title}
          className="w-full h-full object-cover"
          src={image}
          width={192}
          height={192}
          priority
        />
      </div>
    )}
    {publicationDate && <PostDate publicationDate={publicationDate} />}
    <PostTitle>{title}</PostTitle>
  </PostContentWrapper>
);

export default PostContent;
