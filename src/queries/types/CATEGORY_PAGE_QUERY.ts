/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_POST_CATEGORY } from './../../../types/globalTypes';

// ====================================================
// GraphQL query operation: CATEGORY_PAGE_QUERY
// ====================================================

export interface CATEGORY_PAGE_QUERY_posts {
  __typename: 'Post';
  category: ENUM_POST_CATEGORY;
  image_url: string | null;
  slug: string;
  published: boolean | null;
  id: string;
  excerpt: string;
  createdAt: any;
  updatedAt: any;
  title: string | null;
  featured: boolean | null;
}

export interface CATEGORY_PAGE_QUERY_categories {
  __typename: 'Category';
  id: string;
  name: string | null;
  slug: string;
}

export interface CATEGORY_PAGE_QUERY {
  posts: (CATEGORY_PAGE_QUERY_posts | null)[] | null;
  categories: (CATEGORY_PAGE_QUERY_categories | null)[] | null;
}

export interface CATEGORY_PAGE_QUERYVariables {
  category: string;
  limit: number;
}
