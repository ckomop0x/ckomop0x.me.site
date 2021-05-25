import parse from 'html-react-parser';
import React from 'react';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { poetryPageQuery_categories_edges_node } from '../../../../pages/__generated__/poetryPageQuery';

import { ItemWrapper, PostTitle, StyledLink, PostContent } from './styles';

import { getSrcSet } from 'utils/image';

export interface IPostProps {
  /**
   * @id уникальный идентификатор поста
   */
  id: string | null;
  excerpt: string | null;
  publicationDate: string;
  title: string;
  slug: string | null;
  category: poetryPageQuery_categories_edges_node;
  image: string;
  updateDate?: string;
}

const Post: React.FC<IPostProps> = ({
  publicationDate,
  title,
  slug,
  category,
  excerpt,
  image,
}) => {
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
            {publicationDate && (
              <p className="item__date">
                <b>Опубликовано:</b>
                <br />
                {publicationDate}
              </p>
            )}
            <PostTitle>{title}</PostTitle>
            <PostContent>
              {excerpt
                ? parse(`<p>${excerpt.split('\n').join('</br>')}</p>`)
                : 'В этом посте ещё нет контента'}
            </PostContent>
          </div>
        </div>
      </StyledLink>
    </ItemWrapper>
  );
};

export default Post;
