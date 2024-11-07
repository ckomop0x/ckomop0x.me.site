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
    <ContentWrapper className="col-12 col-sm-12 col-md-5">
      <Title>{title}</Title>
      <Date>Опубликовано: {publicationDate}</Date>
      {excerptText && (
        <PostContent>
          {excerptText}
          <LinkStyled href={`/${slug}`}>Читать далее...</LinkStyled>
        </PostContent>
      )}
    </ContentWrapper>
  );
};

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => (
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
    {children}
  </div>
);

export const Title: FC<PropsWithChildren> = ({ children }) => (
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
    {children}
  </h3>
);

export const Date: FC<PropsWithChildren> = ({ children }) => (
  <p
    className="
      text-[#747474]
      text-center
      text-[12px]
    "
  >
    {children}
  </p>
);

export const PostContent: FC<PropsWithChildren> = ({ children }) => (
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
    {children}
  </div>
);

export default FeaturedPostContent;
