import React from 'react';
import moment from 'moment';
import { ItemListStyled } from './styles';
import { Post } from '@components/sections/PostsList/components';

const ItemsList: React.FC<any> = (props) => {
  console.log(props);

  return (
    <div className="row">
      {props.items.map(({ node }: any) => {
        const {
          strapiId,
          title,
          excerpt,
          published,
          createdAt,
          slug,
          extra,
          category,
          image_url,
        } = node;
        const formattedDate = moment(createdAt).format('DD.MM.YYYY');
        const categoryData = props.categories.filter(
          (categoryItem: any) => categoryItem.node.slug === category
        )[0].node;

        return (
          published && (
            <Post
              key={strapiId}
              id={strapiId}
              excerpt={excerpt}
              date={formattedDate}
              title={title}
              slug={slug}
              extra={extra}
              category={categoryData}
              image={image_url}
            />
          )
        );
      })}
    </div>
  );
};

export default ItemsList;
