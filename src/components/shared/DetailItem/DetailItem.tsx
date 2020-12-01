import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import parse from 'html-react-parser';
import React from 'react';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { Content, PoetryItemWrapper, PoetryItemImage } from './styles';

export interface IProjectProps {
  title: string;
  description: string;
  image: string;
  date: Date;
}

const PoetryItem: React.FC<IProjectProps> = ({
  date,
  title,
  description,
  image,
}) => {
  const dateString = format(new Date(date), 'd MMMM yyyy', {
    locale: ruLocale,
  });

  return (
    <PoetryItemWrapper>
      <PoetryItemImage className="poetry-item__image lazyload" image={image} />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-12">
            <Content>
              <h1>{title}</h1>
              <div className="poetry-item__date">{dateString}</div>
              {/* {parse(`<p>${description.split('\n').join('</br>')}</p>`)}*/}
              {parse(description)}
            </Content>
          </div>
        </div>
      </div>
    </PoetryItemWrapper>
  );
};

export default PoetryItem;
