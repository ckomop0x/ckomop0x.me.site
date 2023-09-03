/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostFieldsFragment
// ====================================================

export interface PostFieldsFragment_data_attributes_category_data_attributes {
  __typename: 'Category';
  title: string;
  slug: string;
}

export interface PostFieldsFragment_data_attributes_category_data {
  __typename: 'CategoryEntity';
  attributes: PostFieldsFragment_data_attributes_category_data_attributes | null;
}

export interface PostFieldsFragment_data_attributes_category {
  __typename: 'CategoryEntityResponse';
  data: PostFieldsFragment_data_attributes_category_data | null;
}

export interface PostFieldsFragment_data_attributes_PostImage {
  __typename: 'ComponentContentImage';
  title: string;
  url: string | null;
}

export interface PostFieldsFragment_data_attributes {
  __typename: 'Post';
  date: any;
  updatedAt: any | null;
  excerpt: string;
  featured: boolean | null;
  title: string;
  slug: string;
  category: PostFieldsFragment_data_attributes_category | null;
  PostImage: PostFieldsFragment_data_attributes_PostImage | null;
}

export interface PostFieldsFragment_data {
  __typename: 'PostEntity';
  id: string | null;
  attributes: PostFieldsFragment_data_attributes | null;
}

export interface PostFieldsFragment {
  __typename: 'PostEntityResponseCollection';
  data: PostFieldsFragment_data[];
}
