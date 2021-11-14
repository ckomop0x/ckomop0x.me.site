/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_POST_CATEGORY } from './../../../types/globalTypes';

// ====================================================
// GraphQL query operation: CategoryPageQuery
// ====================================================

export interface CategoryPageQuery_posts {
  __typename: 'Post';
  category: ENUM_POST_CATEGORY;
  image_url: string | null;
  slug: string;
  published: boolean | null;
  id: string;
  excerpt: string;
  date: any | null;
  updated_at: any;
  title: string | null;
  featured: boolean | null;
}

export interface CategoryPageQuery_categories {
  __typename: 'Category';
  id: string;
  title: string | null;
  slug: string;
}

export interface CategoryPageQuery {
  posts: (CategoryPageQuery_posts | null)[] | null;
  categories: (CategoryPageQuery_categories | null)[] | null;
}

export interface CategoryPageQueryVariables {
  category: string;
  limit: number;
}
