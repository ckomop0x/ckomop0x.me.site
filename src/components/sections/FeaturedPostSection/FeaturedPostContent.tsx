import parse from 'html-react-parser';
import Link from 'next/link';

import { ENUM_POST_CATEGORY } from '../../../../types/globalTypes';

import {
  ContentWrapper,
  LinkStyled,
} from 'components/sections/FeaturedPostSection/styles';
import { IndexPageQuery_categories } from 'queries/types/indexPageQuery';
import formatDate from 'utils/dates/formatDate';

export interface FeaturedPostContentProps {
  category: ENUM_POST_CATEGORY;
  categories: IndexPageQuery_categories[];
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const FeaturedPostContent = ({
  categories,
  category,
  title,
  date,
  excerpt,
  slug,
}: FeaturedPostContentProps) => {
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
