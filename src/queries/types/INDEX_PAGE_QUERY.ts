/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_POST_CATEGORY } from './../../../types/globalTypes';

// ====================================================
// GraphQL query operation: INDEX_PAGE_QUERY
// ====================================================

export interface INDEX_PAGE_QUERY_featured {
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

export interface INDEX_PAGE_QUERY_blogItems {
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

export interface INDEX_PAGE_QUERY_poetryItems {
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

export interface INDEX_PAGE_QUERY_categories {
  __typename: 'Category';
  id: string;
  name: string | null;
  slug: string;
}

export interface INDEX_PAGE_QUERY {
  featured: (INDEX_PAGE_QUERY_featured | null)[] | null;
  blogItems: (INDEX_PAGE_QUERY_blogItems | null)[] | null;
  poetryItems: (INDEX_PAGE_QUERY_poetryItems | null)[] | null;
  categories: (INDEX_PAGE_QUERY_categories | null)[] | null;
}
