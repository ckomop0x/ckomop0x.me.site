import { FC } from 'react';

import PostContent from './PostContent';
import { PostWrapper, StyledLink } from './styles';

import { PostInterface } from 'components/ui/PostsList/types';

const Post: FC<PostInterface> = ({
  publicationDate,
  title,
  slug,
  category,
  image,
}) => (
  <PostWrapper className="w-full md:w-1/2 lg:w-1/3">
    <StyledLink href={`/${category?.slug || ''}/${slug}`}>
      <div className="flex flex-wrap h-full">
        <PostContent
          image={image}
          title={title}
          publicationDate={publicationDate}
        />
      </div>
    </StyledLink>
  </PostWrapper>
);

export default Post;
