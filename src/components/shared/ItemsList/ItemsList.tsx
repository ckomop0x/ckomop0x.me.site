import React from 'react';

import Post from 'components/shared/Post';
import formatDate from 'utils/dates/formatDate';

interface IItemsList {
  items: any[];
  categories: any[];
}

const ItemsList: React.FC<IItemsList> = ({ items, categories }) => (
  <div className="row">
    {items.map(
      ({
        id,
        title,
        excerpt,
        published,
        created_at,
        updated_at,
        slug,
        category,
        image_url,
      }: any) => {
        const publicationDate = formatDate(created_at);
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
