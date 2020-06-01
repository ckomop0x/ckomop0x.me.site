import React from 'react';
import moment from 'moment';
import Item from '../Item';
import { ItemListStyled } from './styles';

const ItemsList: React.FC<any> = (props) => {
  console.log(props);

  return (
    <div className="row">
      {props.items.map(({ node }: any) => {
        const {
          strapiId,
          date,
          title,
          excerpt,
          published,
          createdAt,
          updatedAt,
          slug,
          extra,
          category,
          image,
        } = node;
        const formattedDate = moment(createdAt).format('DD.MM.YYYY');
        const categoryData = props.categories.filter(
          (categoryItem: any) => categoryItem.node.slug === category
        )[0].node;

        return (
          published && (
            <Item
              key={strapiId}
              id={strapiId}
              excerpt={excerpt}
              date={formattedDate}
              title={title}
              slug={slug}
              extra={extra}
              category={categoryData}
              image={image}
            />
          )
        );
      })}
    </div>
  );
};

export default ItemsList;
