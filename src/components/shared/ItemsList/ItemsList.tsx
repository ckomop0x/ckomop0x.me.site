import React from 'react';

import Post from 'components/sections/PostsList/Post';
import formatDate from 'utils/dates/formatDate';

interface IItemsList {
  items: any[];
  categories: any[];
}

const ItemsList: React.FC<IItemsList> = ({ items, categories }) => (
  <div className="row">
    {items.map(({ node }: any) => {
      const {
        strapiId,
        title,
        excerpt,
        published,
        createdAt,
        updatedAt,
        slug,
        category,
        image_url,
      } = node;

      const publicationDate = formatDate(createdAt);
      const updateDate = formatDate(updatedAt);

      const categoryData = categories.filter(
        (categoryItem: any) => categoryItem.node.slug === category,
      )[0].node;

      return (
        published && (
          <Post
            key={strapiId}
            id={strapiId}
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
    })}
  </div>
);

export default ItemsList;
