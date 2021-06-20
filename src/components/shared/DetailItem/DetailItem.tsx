import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import parse from 'html-react-parser';
import React from 'react';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { Content, PoetryItemImage } from './styles';

export interface IDetailItem {
  title: string | null;
  description: string;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const DetailItem: React.FC<IDetailItem> = ({
  createdAt,
  title,
  description,
  image,
}) => {
  console.log('createdAt', createdAt);

  const createdDate = format(new Date(createdAt ?? new Date()), 'd MMMM yyyy', {
    locale: ruLocale,
  });

  return (
    <div>
      <PoetryItemImage
        className="poetry-item__image lazyload"
        image={image ?? ''}
      />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-12">
            <Content>
              <h1>{title}</h1>
              <div className="poetry-item__date">
                Опубликовано: {createdDate}
              </div>
              {description ? parse(description) : 'Почему-то здесь пусто.'}
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
