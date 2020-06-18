/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: poetryPageQuery
// ====================================================

export interface poetryPageQuery_poetry_edges_node {
  category: string | null;
  image_url: string | null;
  slug: string | null;
  published: boolean | null;
  strapiId: string | null;
  excerpt: string | null;
  createdAt: any | null;
  updatedAt: any | null;
  title: string | null;
  featured: boolean | null;
}

export interface poetryPageQuery_poetry_edges {
  node: poetryPageQuery_poetry_edges_node;
}

export interface poetryPageQuery_poetry {
  edges: poetryPageQuery_poetry_edges[];
}

export interface poetryPageQuery_categories_edges_node {
  name: string | null;
  slug: string | null;
}

export interface poetryPageQuery_categories_edges {
  node: poetryPageQuery_categories_edges_node;
}

export interface poetryPageQuery_categories {
  edges: poetryPageQuery_categories_edges[];
}

export interface poetryPageQuery {
  poetry: poetryPageQuery_poetry;
  categories: poetryPageQuery_categories;
}
