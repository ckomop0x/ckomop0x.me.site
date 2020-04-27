/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectTemplateQuery
// ====================================================

export interface ProjectTemplateQuery_prismic_portfolio_item_project_url_PRISMIC_Portfolio_item {
  __typename: "PRISMIC_Portfolio_item" | "PRISMIC_Index_page" | "PRISMIC__FileLink" | "PRISMIC__ImageLink";
}

export interface ProjectTemplateQuery_prismic_portfolio_item_project_url_PRISMIC__ExternalLink {
  __typename: "PRISMIC__ExternalLink";
  url: string;
}

export type ProjectTemplateQuery_prismic_portfolio_item_project_url = ProjectTemplateQuery_prismic_portfolio_item_project_url_PRISMIC_Portfolio_item | ProjectTemplateQuery_prismic_portfolio_item_project_url_PRISMIC__ExternalLink;

export interface ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyText_primary {
  __typename: "PRISMIC_Portfolio_itemBodyTextPrimary";
  description_text: any | null;
}

export interface ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyText {
  __typename: "PRISMIC_Portfolio_itemBodyText";
  type: string | null;
  label: string | null;
  primary: ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyText_primary | null;
}

export interface ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyQuote_primary {
  __typename: "PRISMIC_Portfolio_itemBodyQuotePrimary";
  quote: any | null;
}

export interface ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyQuote {
  __typename: "PRISMIC_Portfolio_itemBodyQuote";
  type: string | null;
  label: string | null;
  primary: ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyQuote_primary | null;
}

export interface ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyList_of_articles_primary {
  __typename: "PRISMIC_Portfolio_itemBodyList_of_articlesPrimary";
  title_of_section: any | null;
}

export interface ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyList_of_articles {
  __typename: "PRISMIC_Portfolio_itemBodyList_of_articles";
  type: string | null;
  label: string | null;
  primary: ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyList_of_articles_primary | null;
}

export interface ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyExternal_image_primary_image_link_PRISMIC_Portfolio_item {
  __typename: "PRISMIC_Portfolio_item" | "PRISMIC_Index_page" | "PRISMIC__FileLink" | "PRISMIC__ImageLink";
  _linkType: string | null;
}

export interface ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyExternal_image_primary_image_link_PRISMIC__ExternalLink {
  __typename: "PRISMIC__ExternalLink";
  _linkType: string | null;
  url: string;
}

export type ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyExternal_image_primary_image_link = ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyExternal_image_primary_image_link_PRISMIC_Portfolio_item | ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyExternal_image_primary_image_link_PRISMIC__ExternalLink;

export interface ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyExternal_image_primary {
  __typename: "PRISMIC_Portfolio_itemBodyExternal_imagePrimary";
  image_link: ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyExternal_image_primary_image_link | null;
  image_alt: any | null;
}

export interface ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyExternal_image {
  __typename: "PRISMIC_Portfolio_itemBodyExternal_image";
  type: string | null;
  label: string | null;
  primary: ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyExternal_image_primary | null;
}

export type ProjectTemplateQuery_prismic_portfolio_item_body = ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyText | ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyQuote | ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyList_of_articles | ProjectTemplateQuery_prismic_portfolio_item_body_PRISMIC_Portfolio_itemBodyExternal_image;

export interface ProjectTemplateQuery_prismic_portfolio_item {
  __typename: "PRISMIC_Portfolio_item";
  project_date: any | null;
  title: any | null;
  project_terms: any | null;
  project_url: ProjectTemplateQuery_prismic_portfolio_item_project_url | null;
  excerpt: any | null;
  design: any | null;
  programming: any | null;
  cms: any | null;
  body: ProjectTemplateQuery_prismic_portfolio_item_body[] | null;
}

export interface ProjectTemplateQuery_prismic {
  __typename: "PRISMIC";
  portfolio_item: ProjectTemplateQuery_prismic_portfolio_item | null;
}

export interface ProjectTemplateQuery {
  prismic: ProjectTemplateQuery_prismic;
}

export interface ProjectTemplateQueryVariables {
  uid: string;
}
