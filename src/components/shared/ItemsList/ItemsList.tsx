import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import React from 'react';

import {
  blogPageQuery_blog_edges,
  blogPageQuery_categories_edges,
} from '../../../pages/__generated__/blogPageQuery';
import {
  poetryPageQuery_categories_edges,
  poetryPageQuery_poetry_edges,
} from '../../../pages/__generated__/poetryPageQuery';
import Post from 'components/sections/PostsList/components/Post';

interface IItemsList {
  items: poetryPageQuery_poetry_edges[] | blogPageQuery_blog_edges[];
  categories:
    | poetryPageQuery_categories_edges[]
    | blogPageQuery_categories_edges[];
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
          slug,
          // extra,
          category,
          image_url,
        } = node;

        const publicationDate = format(new Date(createdAt), 'dd MMMM yyyy', {
          locale: ruLocale,
        });
        const categoryData = categories.filter(
          (categoryItem: any) => categoryItem.node.slug === category,
        )[0].node;

        return (
          published && (
            <Post
              key={strapiId}
              id={strapiId}
              excerpt={excerpt}
              date={publicationDate}
              title={title}
              slug={slug}
              // extra={extra}
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
