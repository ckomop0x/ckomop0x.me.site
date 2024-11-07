import React, { FC, PropsWithChildren } from 'react';

interface PostDateProps {
  publicationDate: string;
}

const PostDate: FC<PostDateProps> = ({ publicationDate }) => {
  const [publicationDay, publicationMonth, publicationYear] =
    publicationDate.split(' ');

  return (
    <PostDateWrapper>
      <span className="text-[22px] text-[#513b34] pt-1">{publicationDay}</span>
      <span className="block">{publicationMonth}</span>
      <span className="block">{publicationYear}</span>
    </PostDateWrapper>
  );
};

const PostDateWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div
    className="
      absolute
      box-border
      z-20
      right-0
      bottom-0
      text-[#747474]
      text-center
      text-[13px]
      h-[80px]
      w-[80px]
      bg-white
    "
  >
    {children}
  </div>
);

export default PostDate;
