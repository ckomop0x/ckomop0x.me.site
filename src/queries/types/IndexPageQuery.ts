/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_POST_CATEGORY } from './../../../types/globalTypes';

// ====================================================
// GraphQL query operation: IndexPageQuery
// ====================================================

export interface IndexPageQuery_featured {
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

export interface IndexPageQuery_blogItems {
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

export interface IndexPageQuery_poetryItems {
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

export interface IndexPageQuery_categories {
  __typename: 'Category';
  id: string;
  name: string | null;
  slug: string;
}

export interface IndexPageQuery {
  featured: (IndexPageQuery_featured | null)[] | null;
  blogItems: (IndexPageQuery_blogItems | null)[] | null;
  poetryItems: (IndexPageQuery_poetryItems | null)[] | null;
  categories: (IndexPageQuery_categories | null)[] | null;
}
