/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DetailsPageQuery
// ====================================================

export interface DetailsPageQuery_posts_data_attributes_PostImage {
  __typename: 'ComponentContentImage';
  url: string | null;
  title: string;
}

export interface DetailsPageQuery_posts_data_attributes_Content_ComponentContentImage {
  __typename: 'ComponentContentImage' | 'Error';
}

export interface DetailsPageQuery_posts_data_attributes_Content_ComponentContentRichText {
  __typename: 'ComponentContentRichText';
  description: string | null;
}

export type DetailsPageQuery_posts_data_attributes_Content =
  | DetailsPageQuery_posts_data_attributes_Content_ComponentContentImage
  | DetailsPageQuery_posts_data_attributes_Content_ComponentContentRichText;

export interface DetailsPageQuery_posts_data_attributes {
  __typename: 'Post';
  date: any;
  updatedAt: any | null;
  excerpt: string;
  title: string;
  slug: string;
  PostImage: DetailsPageQuery_posts_data_attributes_PostImage | null;
  Content: (DetailsPageQuery_posts_data_attributes_Content | null)[] | null;
}

export interface DetailsPageQuery_posts_data {
  __typename: 'PostEntity';
  id: string | null;
  attributes: DetailsPageQuery_posts_data_attributes | null;
}

export interface DetailsPageQuery_posts {
  __typename: 'PostEntityResponseCollection';
  data: DetailsPageQuery_posts_data[];
}

export interface DetailsPageQuery {
  posts: DetailsPageQuery_posts | null;
}

export interface DetailsPageQueryVariables {
  slug: string;
  category: string;
}
