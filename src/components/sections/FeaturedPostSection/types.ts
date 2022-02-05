import { ENUM_POST_CATEGORY } from '../../../../types/globalTypes';

import { IndexPageQuery_categories } from 'queries/types/indexPageQuery';

export interface FeaturedPostContentProps {
  category: ENUM_POST_CATEGORY;
  categories: IndexPageQuery_categories[];
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}
