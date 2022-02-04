import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

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

export default function PostsList({ posts, categories }: PostsListProps) {
  const getPublicationDate = (date: string) =>
    format(new Date(date), 'dd MMMM yyyy', {
      locale: ruLocale,
    });

  const getCategoryData = (
    categories: IndexPageQuery_categories[],
    category: ENUM_POST_CATEGORY,
  ) => {
    const [categoryData] = categories.filter(
      (categoryItem: IndexPageQuery_categories) =>
        categoryItem.slug === category,
    );

    return categoryData;
  };

  return (
    <PostsListWrapper className="row">
      {posts.map(
        ({
          id,
          title,
          excerpt,
          published,
          date,
          slug,
          category,
          image_url,
        }: IndexPageQuery_poetryItems) =>
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
}
