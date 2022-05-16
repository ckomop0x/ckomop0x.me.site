/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CategoryFragment
// ====================================================

export interface CategoryFragment_data_attributes {
  __typename: 'Category';
  Title: string;
  Slug: string;
}

export interface CategoryFragment_data {
  __typename: 'CategoryEntity';
  attributes: CategoryFragment_data_attributes | null;
}

export interface CategoryFragment {
  __typename: 'CategoryEntityResponse';
  data: CategoryFragment_data | null;
}
