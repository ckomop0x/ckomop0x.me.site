/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoryPageQuery
// ====================================================

export interface CategoryPageQuery_blogItems_data_attributes_category_data_attributes {
  __typename: 'Category';
  Title: string;
  Slug: string;
}

export interface CategoryPageQuery_blogItems_data_attributes_category_data {
  __typename: 'CategoryEntity';
  attributes: CategoryPageQuery_blogItems_data_attributes_category_data_attributes | null;
}

export interface CategoryPageQuery_blogItems_data_attributes_category {
  __typename: 'CategoryEntityResponse';
  data: CategoryPageQuery_blogItems_data_attributes_category_data | null;
}

export interface CategoryPageQuery_blogItems_data_attributes_PostImage {
  __typename: 'ComponentContentImage';
  title: string;
  url: string | null;
}

export interface CategoryPageQuery_blogItems_data_attributes {
  __typename: 'Post';
  date: any;
  updatedAt: any | null;
  excerpt: string;
  featured: boolean | null;
  title: string;
  slug: string;
  category: CategoryPageQuery_blogItems_data_attributes_category | null;
  PostImage: CategoryPageQuery_blogItems_data_attributes_PostImage | null;
}

export interface CategoryPageQuery_blogItems_data {
  __typename: 'PostEntity';
  id: string | null;
  attributes: CategoryPageQuery_blogItems_data_attributes | null;
}

export interface CategoryPageQuery_blogItems {
  __typename: 'PostEntityResponseCollection';
  data: CategoryPageQuery_blogItems_data[];
}

export interface CategoryPageQuery {
  blogItems: CategoryPageQuery_blogItems | null;
}

export interface CategoryPageQueryVariables {
  category: string;
  limit: number;
}
