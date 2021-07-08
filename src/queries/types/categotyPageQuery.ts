/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_POST_CATEGORY } from './../../../types/globalTypes';

// ====================================================
// GraphQL query operation: categotyPageQuery
// GraphQL query operation: categotyPageQuery
// ====================================================

export interface categotyPageQuery_posts {
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

export interface categotyPageQuery_categories {
  __typename: 'Category';
  id: string;
  name: string | null;
  slug: string;
}

export interface categotyPageQuery {
  posts: (categotyPageQuery_posts | null)[] | null;
  categories: (categotyPageQuery_categories | null)[] | null;
}

export interface categotyPageQueryVariables {
  category: string;
  limit: number;
}
