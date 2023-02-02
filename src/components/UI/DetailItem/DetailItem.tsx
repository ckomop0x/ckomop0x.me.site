import { FC, ReactNode } from 'react';

import { Content, DetailItemWrapper } from './styles';

import formatDate from 'utils/dates/formatDate';

type PostType = 'blog' | 'poetry';

export interface DetailItemProps {
  title: string | null;
  postType?: PostType;
  image: string | null;
  date: Date;
  children: ReactNode | ReactNode[];
}

const DetailItem: FC<DetailItemProps> = ({
  date,
  title,
  children,
  image,
  postType,
}: DetailItemProps): JSX.Element => {
  const postDate = formatDate(date);

  return (
    <DetailItemWrapper image={image}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-12">
            <Content postType={postType}>
              <h1>{title}</h1>
              <div className="poetry-item__date">Опубликовано: {postDate}</div>
              {children}
            </Content>
          </div>
        </div>
      </div>
    </DetailItemWrapper>
  );
};

export default DetailItem;
