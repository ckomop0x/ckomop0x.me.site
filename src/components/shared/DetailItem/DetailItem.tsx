import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import parse from 'html-react-parser';
import React from 'react';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { Content, DetailItemWrapper } from './styles';

export interface IDetailItem {
  title: string | null;
  description: string;
  image: string | null;
  created_at: Date;
  updated_at: Date;
}

const DetailItem: React.FC<IDetailItem> = ({
  created_at,
  title,
  description,
  image,
}) => {
  const createdDate = format(
    new Date(created_at ?? new Date()),
    'd MMMM yyyy',
    {
      locale: ruLocale,
    },
  );

  return (
    <DetailItemWrapper className="lazyload" image={image}>
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
    </DetailItemWrapper>
  );
};

export default DetailItem;
