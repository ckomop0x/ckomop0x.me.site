import styled from '@emotion/styled';
import parse from 'html-react-parser';
import Link from 'next/link';
import { FC } from 'react';

import { LinkStyled } from 'components/sections/FeaturedPostSection/styles';
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
          <Link href={`/${slug}`} passHref legacyBehavior>
            <LinkStyled>Читать далее...</LinkStyled>
          </Link>
        </PostContent>
      )}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  position: relative;
  padding: 0;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
`;

const Title = styled.h3`
  font-size: 46px;
  text-align: center;
  padding: 32px 0 0;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1;
  margin-top: 0;
`;

const Date = styled.p`
  color: #747474;
  text-align: center;
  font-size: 12px;
`;

const PostContent = styled.div`
  text-align: center;
  line-height: 1.5;
  padding: 16px 0;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #777;
  font-size: 18px;

  p {
    color: #312420;
  }
`;

export default FeaturedPostContent;
