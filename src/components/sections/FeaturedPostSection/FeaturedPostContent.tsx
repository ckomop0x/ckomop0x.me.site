import parse from 'html-react-parser';
import { FC, PropsWithChildren } from 'react';

import { LinkStyled } from '@/components/sections/FeaturedPostSection/styles';
import formatDate from 'utils/dates/formatDate';

export interface FeaturedPostContentProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const FeaturedPostContent: FC<FeaturedPostContentProps> = ({
  title,
  date,
  excerpt,
  slug,
}) => {
  const excerptText = excerpt
    ? parse(`<p>${excerpt.split('\n').join('</br>')}</p>`)
    : '';
  const publicationDate = formatDate(date);

  return (
    <div
      className="
      relative
      p-0
      my-4
      flex
      flex-col
      min-h-screen
      items-center
      justify-center
      bg-[#f5f5f5]
    "
    >
      <h3
        className="
      text-[46px]
      text-center
      pt-8
      mb-4
      font-medium
      leading-none
      mt-0
    "
      >
        {title}
      </h3>
      <p
        className="
      text-[#747474]
      text-center
      text-[12px]
    "
      >
        Опубликовано: {publicationDate}
      </p>
      {excerptText && (
        <div
          className="
      text-center
      leading-relaxed
      py-4
      font-roboto
      font-normal
      text-[#777]
      text-[18px]
    "
        >
          {excerptText}
          <LinkStyled href={`/${slug}`}>Читать далее...</LinkStyled>
        </div>
      )}
    </div>
  );
};

export default FeaturedPostContent;
