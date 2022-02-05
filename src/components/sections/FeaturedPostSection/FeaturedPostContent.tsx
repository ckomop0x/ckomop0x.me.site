import parse from 'html-react-parser';
import Link from 'next/link';

import { FeaturedPostContentProps } from './types';

import {
  ContentWrapper,
  LinkStyled,
} from 'components/sections/FeaturedPostSection/styles';
import formatDate from 'utils/dates/formatDate';

const FeaturedPostContent = ({
  categories,
  category,
  title,
  date,
  excerpt,
  slug,
}: FeaturedPostContentProps): JSX.Element => {
  const [categoryData] = categories.filter(
    categoryItem => categoryItem.slug === category,
  );
  const excerptText = excerpt
    ? parse(`<p>${excerpt.split('\n').join('</br>')}</p>`)
    : '';
  const publicationDate = formatDate(date);

  return (
    <ContentWrapper className="col-12 col-sm-12 col-md-5">
      <h3 className="title">{title}</h3>
      <p className="post-date">Опубликовано: {publicationDate}</p>
      {excerptText && (
        <div className="post-text">
          {excerptText}
          <Link href={`/${categoryData.slug}/${slug}`} passHref>
            <LinkStyled>Читать далее...</LinkStyled>
          </Link>
        </div>
      )}
    </ContentWrapper>
  );
};

export default FeaturedPostContent;
