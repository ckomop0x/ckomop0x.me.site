import React from 'react';
import moment from 'moment';
import Item from '../Item';
// import { ALL_ITEMS_QUERY } from '../../queries';
import { ItemListStyled } from './styles';

const ItemsList: React.FC<any> = (props) => {

  return (
    <ItemListStyled>
      {props.items.map(({ node }: any) => {
        const {
          strapiId,
          date,
          title,
          excerpt,
          published,
          slug,
          extra,
          category,
        } = node;
        const formattedDate = moment(date).format('DD.MM.YYYY');
        const categoryData = props.categories.filter(
          (categoryItem: any) => categoryItem.node.slug === category
        )[0].node;

        console.log(categoryData)

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
            />
          )
        );
      })}
    </ItemListStyled>
  );
};

export default ItemsList;
