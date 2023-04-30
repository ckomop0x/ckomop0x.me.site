/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  \n  query DetailsPageQuery($category: String!, $slug: String!) {\n    posts(\n      filters: { slug: { eq: $slug }, category: { slug: { eq: $category } } }\n      publicationState: LIVE\n    ) {\n      data {\n        id\n        attributes {\n          category {\n            ...CategoryFragment\n          }\n          date\n          updatedAt\n          excerpt\n          title\n          slug\n          PostImage {\n            url\n            title\n          }\n          Content {\n            ... on ComponentContentRichText {\n              __typename\n              description\n            }\n            ... on ComponentContentImage {\n              __typename\n              title\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.DetailsPageQueryDocument,
  '\n  fragment CategoryFragment on CategoryEntityResponse {\n    data {\n      attributes {\n        title\n        slug\n      }\n    }\n  }\n':
    types.CategoryFragmentFragmentDoc,
  '\n  \n  fragment PostFieldsFragment on PostEntityResponseCollection {\n    data {\n      id\n      attributes {\n        date\n        updatedAt\n        excerpt\n        featured\n        title\n        slug\n        category {\n          ...CategoryFragment\n        }\n        PostImage {\n          title\n          url\n        }\n      }\n    }\n  }\n':
    types.PostFieldsFragmentFragmentDoc,
  '\n  \n  query IndexPageQuery($locale: I18NLocaleCode!) {\n    homePage(publicationState: LIVE, locale: $locale) {\n      data {\n        id\n        attributes {\n          title\n          hero {\n            id\n            title\n            callToAction\n            image\n          }\n          blogPosts {\n            id\n            title\n            limit\n            sort\n            subTitle\n            category {\n              ...CategoryFragment\n            }\n          }\n          poetryPosts {\n            id\n            title\n            limit\n            sort\n            subTitle\n            category {\n              ...CategoryFragment\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.IndexPageQueryDocument,
  '\n  \n  \n\n  query PostsPageQuery(\n    $category: String!\n    $limit: Int!\n    $sort: [String]\n    $locale: I18NLocaleCode!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      sort: $sort\n      publicationState: LIVE\n      pagination: { limit: $limit }\n    ) {\n      ...PostFieldsFragment\n    }\n  }\n':
    types.PostsPageQueryDocument,
  '\n  query PostsPathQuery(\n    $category: String!\n    $locale: I18NLocaleCode!\n    $limit: Int!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      pagination: { limit: $limit }\n    ) {\n      data {\n        attributes {\n          slug\n        }\n      }\n    }\n  }\n':
    types.PostsPathQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query DetailsPageQuery($category: String!, $slug: String!) {\n    posts(\n      filters: { slug: { eq: $slug }, category: { slug: { eq: $category } } }\n      publicationState: LIVE\n    ) {\n      data {\n        id\n        attributes {\n          category {\n            ...CategoryFragment\n          }\n          date\n          updatedAt\n          excerpt\n          title\n          slug\n          PostImage {\n            url\n            title\n          }\n          Content {\n            ... on ComponentContentRichText {\n              __typename\n              description\n            }\n            ... on ComponentContentImage {\n              __typename\n              title\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  \n  query DetailsPageQuery($category: String!, $slug: String!) {\n    posts(\n      filters: { slug: { eq: $slug }, category: { slug: { eq: $category } } }\n      publicationState: LIVE\n    ) {\n      data {\n        id\n        attributes {\n          category {\n            ...CategoryFragment\n          }\n          date\n          updatedAt\n          excerpt\n          title\n          slug\n          PostImage {\n            url\n            title\n          }\n          Content {\n            ... on ComponentContentRichText {\n              __typename\n              description\n            }\n            ... on ComponentContentImage {\n              __typename\n              title\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CategoryFragment on CategoryEntityResponse {\n    data {\n      attributes {\n        title\n        slug\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment CategoryFragment on CategoryEntityResponse {\n    data {\n      attributes {\n        title\n        slug\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  fragment PostFieldsFragment on PostEntityResponseCollection {\n    data {\n      id\n      attributes {\n        date\n        updatedAt\n        excerpt\n        featured\n        title\n        slug\n        category {\n          ...CategoryFragment\n        }\n        PostImage {\n          title\n          url\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  \n  fragment PostFieldsFragment on PostEntityResponseCollection {\n    data {\n      id\n      attributes {\n        date\n        updatedAt\n        excerpt\n        featured\n        title\n        slug\n        category {\n          ...CategoryFragment\n        }\n        PostImage {\n          title\n          url\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query IndexPageQuery($locale: I18NLocaleCode!) {\n    homePage(publicationState: LIVE, locale: $locale) {\n      data {\n        id\n        attributes {\n          title\n          hero {\n            id\n            title\n            callToAction\n            image\n          }\n          blogPosts {\n            id\n            title\n            limit\n            sort\n            subTitle\n            category {\n              ...CategoryFragment\n            }\n          }\n          poetryPosts {\n            id\n            title\n            limit\n            sort\n            subTitle\n            category {\n              ...CategoryFragment\n            }\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  \n  query IndexPageQuery($locale: I18NLocaleCode!) {\n    homePage(publicationState: LIVE, locale: $locale) {\n      data {\n        id\n        attributes {\n          title\n          hero {\n            id\n            title\n            callToAction\n            image\n          }\n          blogPosts {\n            id\n            title\n            limit\n            sort\n            subTitle\n            category {\n              ...CategoryFragment\n            }\n          }\n          poetryPosts {\n            id\n            title\n            limit\n            sort\n            subTitle\n            category {\n              ...CategoryFragment\n            }\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  \n\n  query PostsPageQuery(\n    $category: String!\n    $limit: Int!\n    $sort: [String]\n    $locale: I18NLocaleCode!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      sort: $sort\n      publicationState: LIVE\n      pagination: { limit: $limit }\n    ) {\n      ...PostFieldsFragment\n    }\n  }\n',
): (typeof documents)['\n  \n  \n\n  query PostsPageQuery(\n    $category: String!\n    $limit: Int!\n    $sort: [String]\n    $locale: I18NLocaleCode!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      sort: $sort\n      publicationState: LIVE\n      pagination: { limit: $limit }\n    ) {\n      ...PostFieldsFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PostsPathQuery(\n    $category: String!\n    $locale: I18NLocaleCode!\n    $limit: Int!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      pagination: { limit: $limit }\n    ) {\n      data {\n        attributes {\n          slug\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query PostsPathQuery(\n    $category: String!\n    $locale: I18NLocaleCode!\n    $limit: Int!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      pagination: { limit: $limit }\n    ) {\n      data {\n        attributes {\n          slug\n        }\n      }\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
