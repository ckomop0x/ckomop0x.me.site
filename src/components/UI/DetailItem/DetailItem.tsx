import parse from 'html-react-parser';
import { FC } from 'react';
// import 'lazysizes';
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { Content, DetailItemWrapper } from './styles';

import formatDate from 'utils/dates/formatDate';

export interface DetailItemProps {
  title: string | null;
  description: string;
  image: string | null;
  date: Date;
}

const DetailItem: FC<DetailItemProps> = ({
  date,
  title,
  description,
  image,
}: DetailItemProps): JSX.Element => {
  const postDate = formatDate(date);

  return (
    <DetailItemWrapper image={image}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-12">
            <Content>
              <h1>{title}</h1>
              <div className="poetry-item__date">Опубликовано: {postDate}</div>
              {description ? parse(description) : 'Почему-то здесь пусто.'}
            </Content>
          </div>
        </div>
      </div>
    </DetailItemWrapper>
  );
};

export default DetailItem;
