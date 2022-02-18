import { FC } from 'react';

import { FeaturedPostWrapper, ItemImage } from './styles';

import FeaturedPostContent from 'components/sections/FeaturedPostSection/FeaturedPostContent';
import {
  IndexPageQuery_categories,
  IndexPageQuery_featured,
} from 'queries/types/indexPageQuery';

interface FeaturedPostSectionProps {
  post: IndexPageQuery_featured;
  categories: IndexPageQuery_categories[];
}

const FeaturedPostSection: FC<FeaturedPostSectionProps> = ({
  post: { category, date, excerpt, image_url, slug, title },
  categories = [],
}): JSX.Element => (
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
            <FeaturedPostContent
              title={title ?? ''}
              date={date}
              excerpt={excerpt}
              category={category}
              categories={categories}
              slug={slug}
            />
          </div>
        </article>
      </div>
    </div>
  </FeaturedPostWrapper>
);

export default FeaturedPostSection;
