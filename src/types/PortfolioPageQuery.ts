/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PortfolioPageQuery
// ====================================================

export interface PortfolioPageQuery_prismic_allPortfolio_items_edges_node__meta {
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

export interface PortfolioPageQuery_prismic_allPortfolio_items_edges_node {
  __typename: "PRISMIC_Portfolio_item";
  _meta: PortfolioPageQuery_prismic_allPortfolio_items_edges_node__meta;
  title: any | null;
  project_date: any | null;
  excerpt: any | null;
}

export interface PortfolioPageQuery_prismic_allPortfolio_items_edges {
  __typename: "PRISMIC_Portfolio_itemConnectionEdge";
  /**
   * The item at the end of the edge.
   */
  node: PortfolioPageQuery_prismic_allPortfolio_items_edges_node;
}

export interface PortfolioPageQuery_prismic_allPortfolio_items {
  __typename: "PRISMIC_Portfolio_itemConnectionConnection";
  /**
   * A list of edges.
   */
  edges: (PortfolioPageQuery_prismic_allPortfolio_items_edges | null)[] | null;
}

export interface PortfolioPageQuery_prismic {
  __typename: "PRISMIC";
  allPortfolio_items: PortfolioPageQuery_prismic_allPortfolio_items;
}

export interface PortfolioPageQuery {
  prismic: PortfolioPageQuery_prismic;
}
