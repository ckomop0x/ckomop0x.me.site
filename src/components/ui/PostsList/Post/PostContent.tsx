import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

import { PostTitle } from '@/components/ui/PostsList/Post/styles';
import PostDate from 'components/ui/PostsList/Post/PostDate';

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
        />
      </div>
    )}
    {publicationDate && <PostDate publicationDate={publicationDate} />}
    <PostTitle>{title}</PostTitle>
  </PostContentWrapper>
);

export const PostContentWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div
    className="
      relative
      m-8
      bg-[#f5f5f5c2]
      w-full
      shadow
      shadow-[0_0_4px_#0000001c]
      flex
      flex-col
      transition-shadow
      duration-300
      ease-in-out
      hover:shadow-[0_0_20px_rgba(0,0,0,0.11)]
    "
  >
    {children}
  </div>
);

export const PostImage: FC<{ src: string; alt: string; srcSet: string }> = ({
  src,
  alt,
}) => (
  <Image
    src={src}
    alt={alt}
    className="w-full h-full object-cover"
    width={192}
    height={192}
    sizes="100vw"
  />
);

export default PostContent;
