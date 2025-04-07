import Link from 'next/link';
import { FC } from 'react';

import { CategoryInfo } from '@/components/PostsList/types';
import { Button } from '@/components/ui/Button/Button';
import { Post } from '@/types';
import PostsList from 'components/PostsList';
import { TitleBlock, SubtitleBlock } from 'styles/Typography';

interface PostsListSectionProps {
  blockTitle: string;
  blockSubtitle: string;
  posts: Post[];
  categoryInfo?: CategoryInfo | null;
}

const PostsListSection: FC<PostsListSectionProps> = ({
  blockTitle,
  blockSubtitle,
  posts,
  categoryInfo,
}) => (
  <section className="pt-10 pb-20">
    <div className="container mx-auto text-center">
      <TitleBlock>{blockTitle}</TitleBlock>
      <SubtitleBlock>{blockSubtitle}</SubtitleBlock>
      <div className="text-center">
        <PostsList posts={posts} />
        <Link href={categoryInfo?.slug || ''} className="inline-block">
          <Button>Перейти в {categoryInfo?.title || ''}</Button>
        </Link>
      </div>
    </div>
  </section>
);

export default PostsListSection;
