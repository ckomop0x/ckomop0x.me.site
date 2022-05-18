import { CategoryPageQuery_posts, CategoryPageQuery_posts_data } from 'queries/types/CategoryPageQuery';
import { DetailsPageQuery_posts, DetailsPageQuery_posts_data } from 'queries/types/DetailsPageQuery';
import { IndexPageQuery_blogItems_data, IndexPageQuery_poetryItems_data } from 'queries/types/indexPageQuery';
import { IItemPath } from 'utils/queries/getItemPath';

export interface IGetStaticProps {
  params: {
    slug: string;
  };
}

export interface IGetStaticPropsResponse {
  props: {
    post: DetailPageType;
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

export type DetailPageType = DetailsPageQuery_posts_data;
