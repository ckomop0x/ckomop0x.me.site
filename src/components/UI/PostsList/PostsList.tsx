import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { FC } from 'react';

import { PostsListWrapper } from './styles';

import Post from 'components/UI/PostsList/Post';
import { CategoryPageQuery_posts } from 'queries/types/CategoryPageQuery';
import {
  IndexPageQuery_blogItems_data,
  IndexPageQuery_poetryItems_data,
} from 'queries/types/indexPageQuery';
import { PostsType } from 'types/index';

interface PostsListProps {
  posts: PostsType;
}

const PostsList: FC<PostsListProps> = ({ posts }): JSX.Element => {
  const getPublicationDate = (date: string): string =>
    format(new Date(date), 'dd MMMM yyyy', {
      locale: ruLocale,
    });

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
