import React from 'react';
import {
  ItemImage,
  ItemDateStyled,
  ItemContent,
  ItemTitle,
  TextStyled,
  ItemWrapper,
  Content,
  LinkStyled,
} from './styles';
import { Link } from 'gatsby';
import parse from 'html-react-parser';

const Post = ({
  date,
  title,
  slug,
  category,
  featured,
  id,
  extra,
  excerpt,
  image,
}: any) => {
  const isWithImage = featured && image;

  return (
    <ItemWrapper
      className={`${isWithImage ? 'col-12' : 'col-12 col-lg-4'}`}
      featured={featured}
    >
      <div className="row">
        {isWithImage && (
          <ItemImage className="col-12 col-sm-12 col-md-6" background={image}>
            <div className="item-image--blurred"></div>
            <img className="item-image" src={image} />
          </ItemImage>
        )}
        <ItemContent
          className={`col-12 col-sm-12 ${isWithImage ? 'col-md-6' : ''}`}
        >
          <ItemTitle>{title}</ItemTitle>
          <ItemDateStyled>Опубликовано: {date}</ItemDateStyled>
          <TextStyled>
            {parse(`<p>${excerpt.split('\n').join('</br>')}</p>`)}
            <LinkStyled to={`/${category.slug}/${slug}`}>
              Читать далее...
            </LinkStyled>
          </TextStyled>
        </ItemContent>
      </div>
    </ItemWrapper>
  );
};

export default Post;
