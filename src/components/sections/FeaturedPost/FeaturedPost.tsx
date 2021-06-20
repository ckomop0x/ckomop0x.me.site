import parse from 'html-react-parser';
import Link from 'next/link';

import {
  ContentWrapper,
  FeaturedPostWrapper,
  LinkStyled,
  ItemImage,
} from './styles';

import formatDate from 'utils/dates/formatDate';

interface IFeaturedPost {
  post: any;
  categories: any[];
}

export default function FeaturedPost({
  post,
  categories = [],
}: IFeaturedPost): JSX.Element {
  const { category, createdAt, excerpt, image_url, slug, title, published } =
    post;
  const publicationDate = formatDate(createdAt);
  const categoryData = categories.filter(
    categoryItem => categoryItem.slug === category,
  )[0];
  const excerptText = excerpt
    ? parse(`<p>${excerpt.split('\n').join('</br>')}</p>`)
    : '';

  return (
    <>
      {published && (
        <FeaturedPostWrapper>
          <div className="col-12">
            <div className="row">
              <article className="wrapper col-12">
                <div className="row">
                  <ItemImage
                    className="col-12 col-sm-12 col-md-7"
                    background={image_url ?? ''}
                  >
                    <div className="item-image" />
                  </ItemImage>
                  <ContentWrapper className="col-12 col-sm-12 col-md-5">
                    <h3 className="title">{title}</h3>
                    <p className="post-date">Опубликовано: {publicationDate}</p>
                    {excerpt && category && (
                      <div className="post-text">
                        {excerptText}
                        <Link href={`/${categoryData?.slug}/${slug}`}>
                          <LinkStyled>Читать далее...</LinkStyled>
                        </Link>
                      </div>
                    )}
                  </ContentWrapper>
                </div>
              </article>
            </div>
          </div>
        </FeaturedPostWrapper>
      )}
    </>
  );
}
