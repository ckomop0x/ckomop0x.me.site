/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexPageQuery
// ====================================================

export interface IndexPageQuery_blogItems_data_attributes_category_data_attributes {
  __typename: 'Category';
  title: string;
  slug: string;
}

export interface IndexPageQuery_blogItems_data_attributes_category_data {
  __typename: 'CategoryEntity';
  attributes: IndexPageQuery_blogItems_data_attributes_category_data_attributes | null;
}

export interface IndexPageQuery_blogItems_data_attributes_category {
  __typename: 'CategoryEntityResponse';
  data: IndexPageQuery_blogItems_data_attributes_category_data | null;
}

export interface IndexPageQuery_blogItems_data_attributes_PostImage {
  __typename: 'ComponentContentImage';
  title: string;
  url: string | null;
}

export interface IndexPageQuery_blogItems_data_attributes {
  __typename: 'Post';
  date: any;
  updatedAt: any | null;
  excerpt: string;
  featured: boolean | null;
  title: string;
  slug: string;
  category: IndexPageQuery_blogItems_data_attributes_category | null;
  PostImage: IndexPageQuery_blogItems_data_attributes_PostImage | null;
}

export interface IndexPageQuery_blogItems_data {
  __typename: 'PostEntity';
  id: string | null;
  attributes: IndexPageQuery_blogItems_data_attributes | null;
}

export interface IndexPageQuery_blogItems {
  __typename: 'PostEntityResponseCollection';
  data: IndexPageQuery_blogItems_data[];
}

export interface IndexPageQuery_poetryItems_data_attributes_category_data_attributes {
  __typename: 'Category';
  title: string;
  slug: string;
}

export interface IndexPageQuery_poetryItems_data_attributes_category_data {
  __typename: 'CategoryEntity';
  attributes: IndexPageQuery_poetryItems_data_attributes_category_data_attributes | null;
}

export interface IndexPageQuery_poetryItems_data_attributes_category {
  __typename: 'CategoryEntityResponse';
  data: IndexPageQuery_poetryItems_data_attributes_category_data | null;
}

export interface IndexPageQuery_poetryItems_data_attributes_PostImage {
  __typename: 'ComponentContentImage';
  title: string;
  url: string | null;
}

export interface IndexPageQuery_poetryItems_data_attributes {
  __typename: 'Post';
  date: any;
  updatedAt: any | null;
  excerpt: string;
  featured: boolean | null;
  title: string;
  slug: string;
  category: IndexPageQuery_poetryItems_data_attributes_category | null;
  PostImage: IndexPageQuery_poetryItems_data_attributes_PostImage | null;
}

export interface IndexPageQuery_poetryItems_data {
  __typename: 'PostEntity';
  id: string | null;
  attributes: IndexPageQuery_poetryItems_data_attributes | null;
}

export interface IndexPageQuery_poetryItems {
  __typename: 'PostEntityResponseCollection';
  data: IndexPageQuery_poetryItems_data[];
}

export interface IndexPageQuery {
  blogItems: IndexPageQuery_blogItems | null;
  poetryItems: IndexPageQuery_poetryItems | null;
}
