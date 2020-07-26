import React from 'react';
import parse from 'html-react-parser';
import { format, parse as parseDate } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import {
  Content,
  StyledTitleBlock,
  PoetryItemWrapper,
  PoetryItemImage,
} from './styles';

export interface IProjectProps {
  title: string;
  image: string;
  date: Date;
  content?: any[];
}

const PoetryItem: React.FC<IProjectProps> = (props) => {
  const { date, title, image, content } = props;
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
              {/* {parse(`<p>${description.split('\n').join('</br>')}</p>`)} */}
              {content?.map((contentItem, index) => {
                if (contentItem?.rich_text) {
                  return (
                    contentItem?.rich_text && (
                      <React.Fragment key={index}>
                        {parse(contentItem.rich_text)}
                      </React.Fragment>
                    )
                  );
                }
              })}
            </Content>
          </div>
        </div>
      </div>
    </PoetryItemWrapper>
  );
};

export default PoetryItem;
