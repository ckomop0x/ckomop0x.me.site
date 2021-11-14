/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_POST_CATEGORY } from './../../../../types/globalTypes';

// ====================================================
// GraphQL fragment: PostFieldsFragment
// ====================================================

export interface PostFieldsFragment {
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
