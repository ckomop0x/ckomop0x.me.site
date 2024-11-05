import { FC } from 'react';

import { PostsListWrapper } from './styles';

import Post from 'components/ui/PostsList/Post';
import { Post as PostsType } from 'types/index';
import formatDate from 'utils/dates/formatDate';

interface PostsListProps {
  posts: PostsType[];
}

const PostsList: FC<PostsListProps> = ({ posts }): JSX.Element => {
  const getPublicationDate = (date: string): string => formatDate(date);

  return (
    <PostsListWrapper className="row">
      {posts.map(
        ({
          documentId,
          excerpt = '',
          date = '',
          title = '',
          slug = '',
          category,
          PostImage,
        }) => {
          return (
            <Post
              key={documentId}
              id={documentId}
              excerpt={excerpt}
              publicationDate={getPublicationDate(date)}
              title={title}
              slug={slug}
              category={category}
              image={PostImage?.url || ''}
            />
          );
          return null;
        },
      )}
    </PostsListWrapper>
  );
};

export default PostsList;
