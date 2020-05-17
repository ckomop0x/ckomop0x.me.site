/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: blogPageQuery
// ====================================================

export interface blogPageQuery_blog_edges_node {
  title: string | null;
  slug: string | null;
  published: boolean | null;
  strapiId: string | null;
  excerpt: string | null;
  category: string | null;
  createdAt: any | null;
  updatedAt: any | null;
}

export interface blogPageQuery_blog_edges {
  node: blogPageQuery_blog_edges_node;
}

export interface blogPageQuery_blog {
  edges: blogPageQuery_blog_edges[];
}

export interface blogPageQuery_categories_edges_node {
  name: string | null;
  slug: string | null;
}

export interface blogPageQuery_categories_edges {
  node: blogPageQuery_categories_edges_node;
}

export interface blogPageQuery_categories {
  edges: blogPageQuery_categories_edges[];
}

export interface blogPageQuery {
  blog: blogPageQuery_blog;
  categories: blogPageQuery_categories;
}
