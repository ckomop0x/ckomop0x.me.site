/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DETAILS_PAGE_QUERY
// ====================================================

export interface DETAILS_PAGE_QUERY_posts_content {
  __typename: 'ComponentPostRichText';
  rich_text: string | null;
}

export interface DETAILS_PAGE_QUERY_posts {
  __typename: 'Post';
  id: string;
  title: string | null;
  slug: string;
  image_url: string | null;
  published: boolean | null;
  excerpt: string;
  content: (DETAILS_PAGE_QUERY_posts_content | null)[] | null;
  created_at: any;
  updated_at: any;
  description: string | null;
}

export interface DETAILS_PAGE_QUERY {
  posts: (DETAILS_PAGE_QUERY_posts | null)[] | null;
}

export interface DETAILS_PAGE_QUERYVariables {
  slug: string;
  category: string;
}
