import { FC, ReactNode } from 'react';

import { Content } from './Content';
import { DetailItemWrapper } from './DetailItemWrapper';

import { Breadcrumbs } from '@/components/ui/BreadCrumbs/BreadCrumbs';
import { BreadcrumbItemType } from '@/types';
import formatDate from '@/utils/dates/formatDate';

export type PostType = 'blog' | 'poetry';

export interface DetailItemProps {
  title: string | null;
  postType?: PostType;
  image: string | null;
  date: Date;
  children: ReactNode | ReactNode[];
  breadcrumbs: BreadcrumbItemType[];
  contentClassName?: string;
}

const DetailItem: FC<DetailItemProps> = ({
  date,
  title,
  children,
  image,
  breadcrumbs,
  contentClassName,
}) => {
  const postDate = formatDate(date);

  return (
    <DetailItemWrapper image={image}>
      <Content>
        <div className="mb-4">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
        <h1>{title}</h1>

        <div className="text-sm mb-5 text-[#5d443c]/80">
          Опубликовано: 
{' '}
{postDate}
        </div>
        <div
          className={`content-wrapper ${contentClassName ? contentClassName : ''}`}
        >
          {children}
        </div>
      </Content>
    </DetailItemWrapper>
  );
}

export default DetailItem;
