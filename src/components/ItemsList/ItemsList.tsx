import React from 'react';
import moment from 'moment';
import Item from '../Item';
// import { ALL_ITEMS_QUERY } from '../../queries';
import { ItemListStyled } from './styles';

const ItemsList = ({queryName}: any) => {

  return (
    <ItemListStyled>
      {[].map(({ node }) => {
        const { id, date, title, excerpt, published, slug, extra } = node;
        const formattedDate = moment(date).format('DD.MM.YYYY');

        return (
          published && (
            <Item
              key={id}
              id={id}
              excerpt={excerpt}
              date={formattedDate}
              title={title}
              slug={slug}
              extra={extra}
              category={''}
            />
          )
        );
      })}
    </ItemListStyled>
  );
};

export default ItemsList;
