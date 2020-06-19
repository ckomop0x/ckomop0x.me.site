import React from 'react';
import { Link } from 'gatsby';
import parse from 'html-react-parser';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

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
import { getSrcSet } from '@utils/image';

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
    <ItemWrapper className={`${isWithImage ? 'col-12' : 'col-12 col-lg-4'}`}>
      <div className="row">
        <div className="post-content">
          {isWithImage && (
            <ItemImage className="col-12 col-sm-12 col-md-6" background={image}>
              <div className="item-image--blurred"></div>
              <img
                className="item-image lazyload"
                loading="lazy"
                data-src={`${image}?tr=w-1080,h-280,fo-top`}
                data-srcset={getSrcSet(image)}
                data-sizes="(max-width: 600px) 480px, 600px"
                alt={title}
              />
            </ItemImage>
          )}
          <ItemContent
            className={`col-12 col-sm-12 ${isWithImage ? 'col-md-6' : ''}`}
          >
            <ItemTitle>{title}</ItemTitle>
            <ItemDateStyled>Опубликовано: {date}</ItemDateStyled>
            <TextStyled>
              {parse(`<p>${excerpt.split('\n').join('</br>')}</p>`)}
            </TextStyled>
            <LinkStyled to={`/${category.slug}/${slug}`}>
              Читать далее...
            </LinkStyled>
          </ItemContent>
        </div>
      </div>
    </ItemWrapper>
  );
};

export default Post;
