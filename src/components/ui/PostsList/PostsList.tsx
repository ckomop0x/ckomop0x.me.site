import { FC } from 'react';

import { PostsListWrapper } from './styles';

import Post from 'components/ui/PostsList/Post';
import { PostsType } from 'types/index';
import formatDate from 'utils/dates/formatDate';

interface PostsListProps {
  posts: PostsType;
}

const PostsList: FC<PostsListProps> = ({ posts }): JSX.Element => {
  const getPublicationDate = (date: string): string => formatDate(date);

  return (
    <PostsListWrapper className="row">
      {posts.map(({ id, attributes }) => {
        if (attributes) {
          const {
            excerpt = '',
            date = '',
            title = '',
            slug = '',
            category,
            PostImage,
          } = attributes;
          return (
            <Post
              key={id}
              id={id}
              excerpt={excerpt}
              publicationDate={getPublicationDate(date)}
              title={title}
              slug={slug}
              category={category?.data?.attributes}
              image={PostImage?.url || ''}
            />
          );
        }
        return null;
      })}
    </PostsListWrapper>
  );
};

export default PostsList;
