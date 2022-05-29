import { FC } from 'react';

import { AllPostsLink, PostsListSectionWrapper } from './styles';

import Button from 'components/UI/Button';
import PostsList from 'components/UI/PostsList';
import { IndexPageQuery_poetryItems_data } from 'queries/types/indexPageQuery';
import { TitleBlock, SubtitleBlock } from 'styles/Typography';

interface PostsListSectionProps {
  blockTitle: string;
  blockSubtitle: string;
  posts: IndexPageQuery_poetryItems_data[];
  categoryInfo?: {
    title: string;
    slug: string;
  } | null;
}

const PostsListSection: FC<PostsListSectionProps> = ({
  blockTitle,
  blockSubtitle,
  posts,
  categoryInfo,
}): JSX.Element => (
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
