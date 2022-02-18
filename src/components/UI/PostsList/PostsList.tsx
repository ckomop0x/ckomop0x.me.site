import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { FC } from 'react';

import { ENUM_POST_CATEGORY } from '../../../../types/globalTypes';

import { PostsListWrapper } from './styles';

import Post from 'components/UI/Post';
import {
  IndexPageQuery_categories,
  IndexPageQuery_poetryItems,
} from 'queries/types/indexPageQuery';

interface PostsListProps {
  posts: IndexPageQuery_poetryItems[];
  categories: IndexPageQuery_categories[];
}

const getCategoryData = (
  categories: IndexPageQuery_categories[],
  category: ENUM_POST_CATEGORY,
) => {
  const [categoryData] = categories.filter(
    (categoryItem: IndexPageQuery_categories) => categoryItem.slug === category,
  );

  return categoryData;
};

const PostsList: FC<PostsListProps> = ({ posts, categories }): JSX.Element => {
  const getPublicationDate = (date: string): string =>
    format(new Date(date), 'dd MMMM yyyy', {
      locale: ruLocale,
    });

  return (
    <PostsListWrapper className="row">
      {posts.map(
        ({ id, title, excerpt, published, date, slug, category, image_url }) =>
          published && (
            <Post
              key={id}
              id={id}
              excerpt={excerpt}
              publicationDate={getPublicationDate(date)}
              title={title || ''}
              slug={slug}
              category={getCategoryData(categories, category)}
              image={image_url || ''}
            />
          ),
      )}
    </PostsListWrapper>
  );
};

export default PostsList;
