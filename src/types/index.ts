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
  paths: string[] | string;
  fallback: boolean;
}

export interface ICategoryPageProps {
  items: any;
  categories: any;
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
