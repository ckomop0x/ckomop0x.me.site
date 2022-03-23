/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostsPathQuery
// ====================================================

export interface PostsPathQuery_posts {
  __typename: 'Post';
  slug: string;
}

export interface PostsPathQuery {
  posts: (PostsPathQuery_posts | null)[] | null;
}

export interface PostsPathQueryVariables {
  category: string;
}
