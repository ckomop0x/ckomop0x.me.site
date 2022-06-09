import { FC } from 'react';

import PostContent from './PostContent';
import { PostWrapper, StyledLink } from './styles';

import { PostInterface } from 'components/UI/PostsList/types';

const Post: FC<PostInterface> = ({
  publicationDate,
  title,
  slug,
  category,
  image,
}): JSX.Element => (
  <PostWrapper className="col-12 col-md-6 col-lg-4">
    <StyledLink href={`/${category?.slug || ''}/${slug}`} passHref>
      <a href={`/${category?.slug || ''}/${slug}`}>
        <div className="row h-100">
          <PostContent
            image={image}
            title={title}
            publicationDate={publicationDate}
          />
        </div>
      </a>
    </StyledLink>
  </PostWrapper>
);

export default Post;
