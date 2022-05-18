import { FC } from 'react';

import Post from 'components/UI/PostsList/Post';
import { CategoryPageProps } from 'types/index';
import formatDate from 'utils/dates/formatDate';

type ItemsListProps = CategoryPageProps;

const ItemsList: FC<ItemsListProps> = ({ items, categories }): JSX.Element => (
  <div className="row">
    {items.map(
      ({
        id,
        title,
        excerpt,
        published,
        date,
        updated_at,
        slug,
        category,
        image_url,
      }) => {
        const publicationDate = formatDate(date);
        const updateDate = formatDate(updated_at);
        const [categoryData] = categories.filter(
          (categoryItem: any) => categoryItem.slug === category,
        );

        return (
          published && (
            <Post
              key={id}
              id={id}
              excerpt={excerpt}
              publicationDate={publicationDate}
              updateDate={updateDate}
              title={title || ''}
              slug={slug}
              category={categoryData}
              image={image_url || ''}
            />
          )
        );
      },
    )}
  </div>
);

export default ItemsList;
