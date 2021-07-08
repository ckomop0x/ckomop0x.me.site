/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: POSTS_PATH_QUERY
// ====================================================

export interface POSTS_PATH_QUERY_posts {
  __typename: 'Post';
  slug: string;
}

export interface POSTS_PATH_QUERY {
  posts: (POSTS_PATH_QUERY_posts | null)[] | null;
}

export interface POSTS_PATH_QUERYVariables {
  category: string;
}
