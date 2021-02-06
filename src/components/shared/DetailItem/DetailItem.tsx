import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import parse from 'html-react-parser';
import React from 'react';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { Content, PoetryItemWrapper, PoetryItemImage } from './styles';

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
  const createdDate = format(new Date(createdAt), 'd MMMM yyyy', {
    locale: ruLocale,
  });

  return (
    <PoetryItemWrapper>
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
              {description && parse(description)}
            </Content>
          </div>
        </div>
      </div>
    </PoetryItemWrapper>
  );
};

export default DetailItem;
