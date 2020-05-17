/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexPageQuery
// ====================================================

export interface IndexPageQuery_poetry_edges_node {
  title: string | null;
  slug: string | null;
  published: boolean | null;
  strapiId: string | null;
  excerpt: string | null;
  category: string | null;
  createdAt: any | null;
  updatedAt: any | null;
}

export interface IndexPageQuery_poetry_edges {
  node: IndexPageQuery_poetry_edges_node;
}

export interface IndexPageQuery_poetry {
  edges: IndexPageQuery_poetry_edges[];
}

export interface IndexPageQuery_blog_edges_node {
  title: string | null;
  slug: string | null;
  published: boolean | null;
  strapiId: string | null;
  excerpt: string | null;
  category: string | null;
  createdAt: any | null;
  updatedAt: any | null;
}

export interface IndexPageQuery_blog_edges {
  node: IndexPageQuery_blog_edges_node;
}

export interface IndexPageQuery_blog {
  edges: IndexPageQuery_blog_edges[];
}

export interface IndexPageQuery_categories_edges_node {
  name: string | null;
  slug: string | null;
}

export interface IndexPageQuery_categories_edges {
  node: IndexPageQuery_categories_edges_node;
}

export interface IndexPageQuery_categories {
  edges: IndexPageQuery_categories_edges[];
}

export interface IndexPageQuery {
  poetry: IndexPageQuery_poetry;
  blog: IndexPageQuery_blog;
  categories: IndexPageQuery_categories;
}
