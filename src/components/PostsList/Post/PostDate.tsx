import { type FC } from 'react';

interface PostDateProps {
  publicationDate: string;
}

export const PostDate: FC<PostDateProps> = ({ publicationDate }) => {
  const [publicationDay, publicationMonth, publicationYear] =
    publicationDate.split(' ');

  return (
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
      h-20
      w-20
      bg-white
    "
    >
      <span className="text-[22px] text-[#513b34] pt-1">{publicationDay}</span>
      <span className="block">{publicationMonth}</span>
      <span className="block">{publicationYear}</span>
    </div>
  );
};
