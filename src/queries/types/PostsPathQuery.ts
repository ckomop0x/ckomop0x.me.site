/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostsPathQuery
// ====================================================

export interface PostsPathQuery_posts_data_attributes {
  __typename: 'Post';
  slug: string;
}

export interface PostsPathQuery_posts_data {
  __typename: 'PostEntity';
  attributes: PostsPathQuery_posts_data_attributes | null;
}

export interface PostsPathQuery_posts {
  __typename: 'PostEntityResponseCollection';
  data: PostsPathQuery_posts_data[];
}

export interface PostsPathQuery {
  posts: PostsPathQuery_posts | null;
}

export interface PostsPathQueryVariables {
  category: string;
  locale: any;
  limit: number;
}
