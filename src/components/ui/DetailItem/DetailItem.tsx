import { FC, ReactNode } from 'react';

import { Content, DetailItemWrapper } from './styles';

import formatDate from 'utils/dates/formatDate';

export type PostType = 'blog' | 'poetry';

export interface DetailItemProps {
  title: string | null;
  postType?: PostType;
  image: string | null;
  date: Date;
  children: ReactNode | ReactNode[];
  contentClassName?: string;
}

const DetailItem: FC<DetailItemProps> = ({
  date,
  title,
  children,
  image,
  postType,
  contentClassName,
}: DetailItemProps): JSX.Element => {
  const postDate = formatDate(date);

  return (
    <DetailItemWrapper image={image}>
      <Content postType={postType}>
        <h1 className="text-center">{title}</h1>
        <div className="poetry-item__date mb-4 text-center">
          Опубликовано: {postDate}
        </div>
        <div className={`content-wrapper ${contentClassName}`}>{children}</div>
      </Content>
    </DetailItemWrapper>
  );
};

export default DetailItem;
