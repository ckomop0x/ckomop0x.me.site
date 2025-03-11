import Link from 'next/link';
import { FC } from 'react';

import PostContent from './PostContent';

import { PostInterface } from 'components/ui/PostsList/types';

const Post: FC<PostInterface> = ({
  publicationDate,
  title,
  slug,
  category,
  image,
}) => (
  <div className="w-full max-w-sm min-w-96">
    <Link
      href={`/${category?.slug || ''}/${slug}`}
      className="no-underline hover:no-underline"
    >
      <div className="flex flex-wrap h-full">
        <PostContent
          image={image}
          title={title}
          publicationDate={publicationDate}
        />
      </div>
    </Link>
  </div>
);

export default Post;
