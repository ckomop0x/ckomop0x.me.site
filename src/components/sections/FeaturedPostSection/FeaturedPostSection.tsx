import { FC } from 'react';

import { FeaturedPostWrapper, ItemImage } from './styles';

import FeaturedPostContent from 'components/sections/FeaturedPostSection/FeaturedPostContent';

interface FeaturedPostSectionProps {
  post: any;
  categories: any[];
}

const FeaturedPostSection: FC<FeaturedPostSectionProps> = ({
  post: { date, excerpt, image_url = '', slug, title = '' },
}): JSX.Element => (
  <FeaturedPostWrapper>
    <div className="col-12">
      <div className="row">
        <article className="wrapper col-12">
          <div className="row">
            <ItemImage
              className="col-12 col-sm-12 col-md-7"
              background={image_url}
            >
              <div className="item-image" />
            </ItemImage>
            <FeaturedPostContent
              title={title}
              date={date}
              excerpt={excerpt}
              slug={slug}
            />
          </div>
        </article>
      </div>
    </div>
  </FeaturedPostWrapper>
);

export default FeaturedPostSection;
