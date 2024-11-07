import { FC } from 'react';

import { AllPostsLink, PostsListSectionWrapper } from './styles';

import { Button } from '@/components/ui/Button/Button';
import { Post } from '@/types';
import PostsList from 'components/ui/PostsList';
import { CategoryInfo } from 'components/ui/PostsList/types';
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
  <PostsListSectionWrapper>
    <div className="container">
      <TitleBlock>{blockTitle}</TitleBlock>
      <SubtitleBlock>{blockSubtitle}</SubtitleBlock>
      <div className="text-center">
        <PostsList posts={posts} />
        <AllPostsLink href={categoryInfo?.slug || ''}>
          <Button>Перейти в {categoryInfo?.title || ''}</Button>
        </AllPostsLink>
      </div>
    </div>
  </PostsListSectionWrapper>
);

export default PostsListSection;
