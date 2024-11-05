import { DetailsPageQuery_posts_data } from 'queries/types/DetailsPageQuery';
import { Post as StrapiPost } from 'queries/types/graphql';
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

export type Post = StrapiPost;

export type CategoryInterface = 'blog' | 'poetry';

export type DetailPageType = DetailsPageQuery_posts_data;
