import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { FC } from 'react';

import { PostsListWrapper } from './styles';

import Post from 'components/UI/Post';
import { IndexPageQuery_poetryItems_data } from 'queries/types/indexPageQuery';

interface PostsListProps {
  posts: IndexPageQuery_poetryItems_data[];
}

const PostsList: FC<PostsListProps> = ({ posts }): JSX.Element => {
  const getPublicationDate = (date: string): string =>
    format(new Date(date), 'dd MMMM yyyy', {
      locale: ruLocale,
    });

  console.log('posts', posts);

  return (
    <PostsListWrapper className="row">
      {posts.map(({ id, attributes }) => (
        <Post
          key={id}
          id={id}
          excerpt={attributes?.excerpt || ''}
          publicationDate={getPublicationDate(attributes?.date || '')}
          title={attributes?.title || ''}
          slug={attributes?.slug || ''}
          category={attributes?.category?.data?.attributes}
          image={attributes?.PostImage?.url || ''}
        />
      ))}
    </PostsListWrapper>
  );
};

export default PostsList;
