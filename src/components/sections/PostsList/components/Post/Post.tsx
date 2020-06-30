import React from 'react';
import { Link } from 'gatsby';
import parse from 'html-react-parser';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { ItemWrapper, StyledLink } from './styles';
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
  const isWithImage = !!image;

  return (
    <ItemWrapper className="col-12 col-md-6 col-lg-4">
      <StyledLink to={`/${category.slug}/${slug}`}>
        <div className="row h-100">
          <div className="post-content">
            {isWithImage && (
              <div>
                <img
                  className="item__image lazyload"
                  loading="lazy"
                  data-src={`${image}`}
                  data-srcset={getSrcSet(image)}
                  data-sizes="(max-width: 600px) 480px, 600px"
                  alt={title}
                />
              </div>
            )}
            {date && <p className="item__date">Опубликовано: {date}</p>}
            {/* <ItemContent className="col-12 col-sm-12"> */}
            <h3 className="item__title">{title}</h3>
            <div className="item__content">
              {parse(`<p>${excerpt.split('\n').join('</br>')}</p>`)}
            </div>

            {/* </ItemContent> */}
          </div>
        </div>
      </StyledLink>
    </ItemWrapper>
  );
};

export default Post;
