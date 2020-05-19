/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectTemplateQuery
// ====================================================

export interface ProjectTemplateQuery_poetry {
  id: string;
  title: string | null;
  slug: string | null;
  published: boolean | null;
  image_url: string | null;
  excerpt: string | null;
  description: string | null;
  date: any | null;
  written: any | null;
  strapiId: string | null;
}

export interface ProjectTemplateQuery {
  poetry: ProjectTemplateQuery_poetry | null;
}

export interface ProjectTemplateQueryVariables {
  slug: string;
}
