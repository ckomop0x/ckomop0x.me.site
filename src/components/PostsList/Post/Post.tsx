import Link from 'next/link';
import { FC } from 'react';

import PostContent from './PostContent';

import { CategoryInfo } from '@/components/PostsList/types';
import { getApiUrl } from '@/utils/api/getApiUrl';

interface PostInterface {
  id: string | null | undefined;
  excerpt: string | null;
  publicationDate: string;
  title: string;
  slug: string | null;
  category?: CategoryInfo | null;
  image: string;
  updateDate?: string;
}

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
          image={image.includes('https://') ? image : `${getApiUrl()}${image}`}
          title={title}
          publicationDate={publicationDate}
        />
      </div>
    </Link>
  </div>
);

export default Post;
