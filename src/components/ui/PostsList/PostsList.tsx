import { FC } from 'react';

import Post from 'components/ui/PostsList/Post';
import { Post as PostsType } from 'types/index';
import formatDate from 'utils/dates/formatDate';

interface PostsListProps {
  posts: PostsType[];
}

const PostsList: FC<PostsListProps> = ({ posts }) => {
  const getPublicationDate = (date: string): string => formatDate(date);

  return (
    <div className="container mx-auto flex flex-wrap justify-center">
      {posts.map(
        ({
          documentId,
          excerpt = '',
          date = '',
          title = '',
          slug = '',
          category,
          coverImage,
          PostImage,
        }) => {
          const image = coverImage?.url || PostImage?.url || '';

          return (
            <Post
              key={documentId}
              id={documentId}
              excerpt={excerpt}
              publicationDate={getPublicationDate(date)}
              title={title}
              slug={slug}
              category={category}
              image={image}
            />
          );
        },
      )}
    </div>
  );
};

export default PostsList;
