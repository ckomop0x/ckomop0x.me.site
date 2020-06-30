import React from 'react';
import parse from 'html-react-parser';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { Content, StyledTitleBlock, PoetryItemWrapper } from './styles';

export interface IProjectProps {
  title: string;
  poetryDate?: Date | undefined;
  poetryItem: any;
}

const PoetryItem: React.FC<any> = (props) => {
  const { poetryItem } = props;
  const { image_url } = poetryItem;

  return (
    <PoetryItemWrapper>
      <div
        className="poetry-item__image lazyload"
        style={{ backgroundImage: `url(${image_url})` }}
      >
        <div className="container">
          <div className="row">
            <div>
              <StyledTitleBlock className="col-12"></StyledTitleBlock>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-12">
            <Content>
              <h2>{poetryItem.title}</h2>
              {parse(
                `<p>${poetryItem.description.split('\n').join('</br>')}</p>`
              )}
            </Content>
          </div>
        </div>
      </div>
    </PoetryItemWrapper>
  );
};

export default PoetryItem;
