/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: poetryPageQuery
// ====================================================

export interface poetryPageQuery_poetry_edges_node_image_childImageSharp_children {
  id: string;
}

export interface poetryPageQuery_poetry_edges_node_image_childImageSharp_sizes {
  tracedSVG: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
  srcSet: string;
  src: string;
  sizes: string;
  presentationWidth: number;
  presentationHeight: number;
  originalName: string | null;
  originalImg: string | null;
  base64: string | null;
  aspectRatio: number;
}

export interface poetryPageQuery_poetry_edges_node_image_childImageSharp {
  children: poetryPageQuery_poetry_edges_node_image_childImageSharp_children[];
  sizes: poetryPageQuery_poetry_edges_node_image_childImageSharp_sizes | null;
}

export interface poetryPageQuery_poetry_edges_node_image {
  id: string;
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
  prettySize: string;
  size: number;
  sourceInstanceName: string;
  uid: number;
  root: string;
  relativePath: string;
  relativeDirectory: string;
  rdev: number;
  absolutePath: string;
  childImageSharp: poetryPageQuery_poetry_edges_node_image_childImageSharp | null;
}

export interface poetryPageQuery_poetry_edges_node {
  title: string | null;
  slug: string | null;
  published: boolean | null;
  strapiId: string | null;
  excerpt: string | null;
  category: string | null;
  createdAt: any | null;
  updatedAt: any | null;
  image: poetryPageQuery_poetry_edges_node_image | null;
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
