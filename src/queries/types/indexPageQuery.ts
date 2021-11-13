/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_POST_CATEGORY } from './../../../types/globalTypes';

// ====================================================
// GraphQL query operation: indexPageQuery
// ====================================================

export interface indexPageQuery_featured {
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

export interface indexPageQuery_blogItems {
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

export interface indexPageQuery_poetryItems {
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

export interface indexPageQuery_categories {
  __typename: 'Category';
  id: string;
  title: string | null;
  slug: string;
}

export interface indexPageQuery {
  featured: (indexPageQuery_featured | null)[] | null;
  blogItems: (indexPageQuery_blogItems | null)[] | null;
  poetryItems: (indexPageQuery_poetryItems | null)[] | null;
  categories: (indexPageQuery_categories | null)[] | null;
}
