import { CategoryPageQuery_posts, CategoryPageQuery_posts_data } from 'queries/types/CategoryPageQuery';
import { IndexPageQuery_blogItems_data, IndexPageQuery_poetryItems_data } from 'queries/types/indexPageQuery';
import { IItemPath } from 'utils/queries/getItemPath';

export interface IGetStaticProps {
  params: {
    slug: string;
  };
}

export interface IGetStaticPropsResponse {
  props: {
    detailedPost: IDetailPageProps;
  };
}

export interface IGetStaticPathsResponse {
  paths: IItemPath[] | string[] | string;
  fallback: boolean;
}

export type PostsType =
  IndexPageQuery_blogItems_data[]
  | IndexPageQuery_poetryItems_data[]
  | CategoryPageQuery_posts_data[];

export interface CategoryPageProps {
  posts: PostsType;
}

export type ICategory = 'blog' | 'poetry';

export interface IDetailPageProps {
  detailedPost: {
    image_url: string;
    slug: string;
    title: string;
    updated_at: Date;
    date: Date;
    content?: {
      rich_text: string;
    }[];
  };
}
