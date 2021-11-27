import React from 'react';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { ItemWrapper, PostDate, PostTitle, StyledLink } from './styles';

import { IndexPageQuery_categories } from 'queries/types/indexPageQuery';
import getSrcSet from 'utils/image/getSrcSet';

export interface IPostProps {
  id: string | null;
  excerpt: string | null;
  publicationDate: string;
  title: string;
  slug: string | null;
  category: IndexPageQuery_categories;
  image: string;
  updateDate?: string;
}

const Post: React.FC<IPostProps> = ({
  publicationDate,
  title,
  slug,
  category,
  image,
}) => {
  const hasImage = !!image;
  const [publicationDay, publicationMonth, publicationYear] =
    publicationDate.split(' ');

  return (
    <ItemWrapper className="col-12 col-md-6 col-lg-4">
      <StyledLink href={`/${category.slug}/${slug}`}>
        <a>
          <div className="row h-100">
            <div className="post-content">
              {hasImage && (
                <img
                  className="item__image lazyload"
                  loading="lazy"
                  data-src={`${image}`}
                  data-srcset={getSrcSet(image)}
                  data-sizes="(max-width: 600px) 480px, 600px"
                  alt={title}
                />
              )}
              {publicationDate && (
                <PostDate>
                  <span>{publicationDay}</span>
                  <span>{publicationMonth}</span>
                  <span>{publicationYear}</span>
                </PostDate>
              )}
              <PostTitle>{title}</PostTitle>
            </div>
          </div>
        </a>
      </StyledLink>
    </ItemWrapper>
  );
};

export default Post;
