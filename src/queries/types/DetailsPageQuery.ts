/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DetailsPageQuery
// ====================================================

export interface DetailsPageQuery_posts_content {
  __typename: "ComponentPostRichText";
  rich_text: string | null;
}

export interface DetailsPageQuery_posts {
  __typename: "Post";
  id: string;
  title: string | null;
  slug: string;
  image_url: string | null;
  published: boolean | null;
  excerpt: string;
  content: (DetailsPageQuery_posts_content | null)[] | null;
  date: any | null;
  updated_at: any;
  description: string | null;
}

export interface DetailsPageQuery {
  posts: (DetailsPageQuery_posts | null)[] | null;
}

export interface DetailsPageQueryVariables {
  slug: string;
  category: string;
}
