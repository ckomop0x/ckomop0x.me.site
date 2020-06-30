import React from 'react';
import parse from 'html-react-parser';
import { format, parse as parseDate } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { ItemWrapper, StyledLink } from './styles';
import { getSrcSet } from '@utils/image';

const Post = ({
  date,
  title,
  slug,
  category,
  id,
  extra,
  excerpt,
  image,
}: any) => {
  const isWithImage = !!image;
  const parsedDate = parseDate(date, 'mm.dd.yyyy', new Date());
  const dateString = format(parsedDate, 'd MMMM yyyy', {
    locale: ruLocale,
  });

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
            {date && <p className="item__date">{dateString}</p>}
            <h3 className="item__title">{title}</h3>
            <div className="item__content">
              {parse(`<p>${excerpt.split('\n').join('</br>')}</p>`)}
            </div>
          </div>
        </div>
      </StyledLink>
    </ItemWrapper>
  );
};

export default Post;
