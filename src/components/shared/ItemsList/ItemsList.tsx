import React from 'react';

import {
  blogPageQuery_blog_edges,
  blogPageQuery_categories_edges,
} from '../../../pages/__generated__/blogPageQuery';
import {
  poetryPageQuery_categories_edges,
  poetryPageQuery_poetry_edges,
} from '../../../pages/__generated__/poetryPageQuery';

import Post from 'components/sections/PostsList/Post';
import formatDate from 'utils/dates/formatDate';

type ICategory =
  | poetryPageQuery_categories_edges
  | blogPageQuery_categories_edges;

type IItem = poetryPageQuery_poetry_edges | blogPageQuery_blog_edges;

interface IItemsList {
  items: IItem[];
  categories: ICategory[];
}

const ItemsList: React.FC<IItemsList> = ({ items, categories }) => (
  <div className="row">
    {items.map(
      ({ node }: poetryPageQuery_poetry_edges | blogPageQuery_blog_edges) => {
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
          (categoryItem: ICategory) => categoryItem.node.slug === category,
        )[0].node;

        return (
          published && (
            <Post
              key={strapiId}
              id={strapiId}
              excerpt={excerpt}
              publicationDate={publicationDate}
              updateDate={updateDate}
              title={title}
              slug={slug}
              category={categoryData}
              image={image_url}
            />
          )
        );
      },
    )}
  </div>
);

export default ItemsList;
