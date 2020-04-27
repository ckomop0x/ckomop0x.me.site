/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MainPageQuery
// ====================================================

export interface MainPageQuery_prismic_allIndex_pages_edges_node__meta_alternateLanguages {
  __typename: "PRISMIC_RelatedDocument";
  /**
   * The language of the document.
   */
  lang: string;
}

export interface MainPageQuery_prismic_allIndex_pages_edges_node__meta {
  __typename: "PRISMIC_Meta";
  /**
   * Alternate languages the document.
   */
  alternateLanguages: MainPageQuery_prismic_allIndex_pages_edges_node__meta_alternateLanguages[];
}

export interface MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyImage_gallery {
  __typename: "PRISMIC_Index_pageBodyImage_gallery";
}

export interface MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyText_primary {
  __typename: "PRISMIC_Index_pageBodyTextPrimary";
  text: any | null;
}

export interface MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyText {
  __typename: "PRISMIC_Index_pageBodyText";
  type: string | null;
  primary: MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyText_primary | null;
}

export interface MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_primary_section_image_PRISMIC_Portfolio_item {
  __typename: "PRISMIC_Portfolio_item" | "PRISMIC_Index_page" | "PRISMIC__ExternalLink" | "PRISMIC__FileLink";
}

export interface MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_primary_section_image_PRISMIC__ImageLink {
  __typename: "PRISMIC__ImageLink";
  height: number;
  _linkType: string | null;
  name: string;
  size: any;
  url: string;
  width: number;
}

export type MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_primary_section_image = MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_primary_section_image_PRISMIC_Portfolio_item | MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_primary_section_image_PRISMIC__ImageLink;

export interface MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_primary {
  __typename: "PRISMIC_Index_pageBodyAdvantages_galleryPrimary";
  section_id: any | null;
  section_title: any | null;
  section_description: any | null;
  section_image: MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_primary_section_image | null;
}

export interface MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_fields_icon_link_PRISMIC_Portfolio_item {
  __typename: "PRISMIC_Portfolio_item" | "PRISMIC_Index_page" | "PRISMIC__ExternalLink" | "PRISMIC__FileLink";
}

export interface MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_fields_icon_link_PRISMIC__ImageLink {
  __typename: "PRISMIC__ImageLink";
  url: string;
  name: string;
}

export type MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_fields_icon_link = MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_fields_icon_link_PRISMIC_Portfolio_item | MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_fields_icon_link_PRISMIC__ImageLink;

export interface MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_fields {
  __typename: "PRISMIC_Index_pageBodyAdvantages_galleryFields";
  block_title: any | null;
  icon_link: MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_fields_icon_link | null;
  block_description: any | null;
}

export interface MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery {
  __typename: "PRISMIC_Index_pageBodyAdvantages_gallery";
  type: string | null;
  primary: MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_primary | null;
  fields: MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery_fields[] | null;
}

export interface MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyQuote_primary {
  __typename: "PRISMIC_Index_pageBodyQuotePrimary";
  quote: any | null;
  name_of_the_author: any | null;
}

export interface MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyQuote {
  __typename: "PRISMIC_Index_pageBodyQuote";
  type: string | null;
  label: string | null;
  primary: MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyQuote_primary | null;
}

export type MainPageQuery_prismic_allIndex_pages_edges_node_body = MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyImage_gallery | MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyText | MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyAdvantages_gallery | MainPageQuery_prismic_allIndex_pages_edges_node_body_PRISMIC_Index_pageBodyQuote;

export interface MainPageQuery_prismic_allIndex_pages_edges_node {
  __typename: "PRISMIC_Index_page";
  headline: any | null;
  description: any | null;
  image: any | null;
  _linkType: string | null;
  _meta: MainPageQuery_prismic_allIndex_pages_edges_node__meta;
  body: MainPageQuery_prismic_allIndex_pages_edges_node_body[] | null;
}

export interface MainPageQuery_prismic_allIndex_pages_edges {
  __typename: "PRISMIC_Index_pageConnectionEdge";
  /**
   * The item at the end of the edge.
   */
  node: MainPageQuery_prismic_allIndex_pages_edges_node;
}

export interface MainPageQuery_prismic_allIndex_pages {
  __typename: "PRISMIC_Index_pageConnectionConnection";
  /**
   * A list of edges.
   */
  edges: (MainPageQuery_prismic_allIndex_pages_edges | null)[] | null;
}

export interface MainPageQuery_prismic_allPortfolio_items_edges_node__meta {
  __typename: "PRISMIC_Meta";
  /**
   * The id of the document.
   */
  id: string;
  /**
   * The uid of the document.
   */
  uid: string | null;
  /**
   * The type of the document.
   */
  type: string;
}

export interface MainPageQuery_prismic_allPortfolio_items_edges_node {
  __typename: "PRISMIC_Portfolio_item";
  _meta: MainPageQuery_prismic_allPortfolio_items_edges_node__meta;
  title: any | null;
  project_date: any | null;
  excerpt: any | null;
}

export interface MainPageQuery_prismic_allPortfolio_items_edges {
  __typename: "PRISMIC_Portfolio_itemConnectionEdge";
  /**
   * The item at the end of the edge.
   */
  node: MainPageQuery_prismic_allPortfolio_items_edges_node;
}

export interface MainPageQuery_prismic_allPortfolio_items {
  __typename: "PRISMIC_Portfolio_itemConnectionConnection";
  /**
   * A list of edges.
   */
  edges: (MainPageQuery_prismic_allPortfolio_items_edges | null)[] | null;
}

export interface MainPageQuery_prismic {
  __typename: "PRISMIC";
  allIndex_pages: MainPageQuery_prismic_allIndex_pages;
  allPortfolio_items: MainPageQuery_prismic_allPortfolio_items;
}

export interface MainPageQuery {
  prismic: MainPageQuery_prismic;
}
