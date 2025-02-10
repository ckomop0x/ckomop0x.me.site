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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query BlogPageQuery {\n    blogPage {\n      posts {\n        limit\n        sort\n        title\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n    }\n  }\n": typeof types.BlogPageQueryDocument,
    "\n  query DetailsPageQuery($category: String!, $slug: String!) {\n    posts(\n      filters: { slug: { eq: $slug }, category: { slug: { eq: $category } } }\n      status: PUBLISHED\n    ) {\n      documentId\n      category {\n        title\n        slug\n      }\n      date\n      updatedAt\n      excerpt\n      title\n      slug\n      PostImage {\n        url\n        title\n      }\n      Content {\n        ... on ComponentContentRichText {\n          __typename\n          description\n        }\n        ... on ComponentContentImage {\n          __typename\n          title\n          url\n        }\n      }\n    }\n  }\n": typeof types.DetailsPageQueryDocument,
    "\n  fragment PostFieldsFragment on Post {\n    documentId\n    date\n    updatedAt\n    excerpt\n    featured\n    title\n    slug\n    category {\n      title\n      slug\n    }\n    PostImage {\n      title\n      url\n    }\n  }\n": typeof types.PostFieldsFragmentFragmentDoc,
    "\n  query IndexPageQuery {\n    homePage {\n      documentId\n      title\n      hero {\n        id\n        title\n        callToAction\n        image\n      }\n      blogPosts {\n        id\n        title\n        limit\n        sort\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n      poetryPosts {\n        id\n        title\n        limit\n        sort\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n    }\n  }\n": typeof types.IndexPageQueryDocument,
    "\n  query PoetryPageQuery {\n    poetryPage {\n      posts {\n        limit\n        sort\n        title\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n    }\n  }\n": typeof types.PoetryPageQueryDocument,
    "\n  \n\n  query PostsPageQuery(\n    $category: String!\n    $limit: Int!\n    $sort: [String]\n    $locale: I18NLocaleCode!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      sort: $sort\n      status: PUBLISHED\n      pagination: { limit: $limit }\n    ) {\n      ...PostFieldsFragment\n    }\n  }\n": typeof types.PostsPageQueryDocument,
    "\n  query PostsPathQuery(\n    $category: String!\n    $locale: I18NLocaleCode!\n    $limit: Int!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      pagination: { limit: $limit }\n    ) {\n      slug\n    }\n  }\n": typeof types.PostsPathQueryDocument,
};
const documents: Documents = {
    "\n  query BlogPageQuery {\n    blogPage {\n      posts {\n        limit\n        sort\n        title\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n    }\n  }\n": types.BlogPageQueryDocument,
    "\n  query DetailsPageQuery($category: String!, $slug: String!) {\n    posts(\n      filters: { slug: { eq: $slug }, category: { slug: { eq: $category } } }\n      status: PUBLISHED\n    ) {\n      documentId\n      category {\n        title\n        slug\n      }\n      date\n      updatedAt\n      excerpt\n      title\n      slug\n      PostImage {\n        url\n        title\n      }\n      Content {\n        ... on ComponentContentRichText {\n          __typename\n          description\n        }\n        ... on ComponentContentImage {\n          __typename\n          title\n          url\n        }\n      }\n    }\n  }\n": types.DetailsPageQueryDocument,
    "\n  fragment PostFieldsFragment on Post {\n    documentId\n    date\n    updatedAt\n    excerpt\n    featured\n    title\n    slug\n    category {\n      title\n      slug\n    }\n    PostImage {\n      title\n      url\n    }\n  }\n": types.PostFieldsFragmentFragmentDoc,
    "\n  query IndexPageQuery {\n    homePage {\n      documentId\n      title\n      hero {\n        id\n        title\n        callToAction\n        image\n      }\n      blogPosts {\n        id\n        title\n        limit\n        sort\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n      poetryPosts {\n        id\n        title\n        limit\n        sort\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n    }\n  }\n": types.IndexPageQueryDocument,
    "\n  query PoetryPageQuery {\n    poetryPage {\n      posts {\n        limit\n        sort\n        title\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n    }\n  }\n": types.PoetryPageQueryDocument,
    "\n  \n\n  query PostsPageQuery(\n    $category: String!\n    $limit: Int!\n    $sort: [String]\n    $locale: I18NLocaleCode!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      sort: $sort\n      status: PUBLISHED\n      pagination: { limit: $limit }\n    ) {\n      ...PostFieldsFragment\n    }\n  }\n": types.PostsPageQueryDocument,
    "\n  query PostsPathQuery(\n    $category: String!\n    $locale: I18NLocaleCode!\n    $limit: Int!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      pagination: { limit: $limit }\n    ) {\n      slug\n    }\n  }\n": types.PostsPathQueryDocument,
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
export function graphql(source: "\n  query BlogPageQuery {\n    blogPage {\n      posts {\n        limit\n        sort\n        title\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BlogPageQuery {\n    blogPage {\n      posts {\n        limit\n        sort\n        title\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query DetailsPageQuery($category: String!, $slug: String!) {\n    posts(\n      filters: { slug: { eq: $slug }, category: { slug: { eq: $category } } }\n      status: PUBLISHED\n    ) {\n      documentId\n      category {\n        title\n        slug\n      }\n      date\n      updatedAt\n      excerpt\n      title\n      slug\n      PostImage {\n        url\n        title\n      }\n      Content {\n        ... on ComponentContentRichText {\n          __typename\n          description\n        }\n        ... on ComponentContentImage {\n          __typename\n          title\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DetailsPageQuery($category: String!, $slug: String!) {\n    posts(\n      filters: { slug: { eq: $slug }, category: { slug: { eq: $category } } }\n      status: PUBLISHED\n    ) {\n      documentId\n      category {\n        title\n        slug\n      }\n      date\n      updatedAt\n      excerpt\n      title\n      slug\n      PostImage {\n        url\n        title\n      }\n      Content {\n        ... on ComponentContentRichText {\n          __typename\n          description\n        }\n        ... on ComponentContentImage {\n          __typename\n          title\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PostFieldsFragment on Post {\n    documentId\n    date\n    updatedAt\n    excerpt\n    featured\n    title\n    slug\n    category {\n      title\n      slug\n    }\n    PostImage {\n      title\n      url\n    }\n  }\n"): (typeof documents)["\n  fragment PostFieldsFragment on Post {\n    documentId\n    date\n    updatedAt\n    excerpt\n    featured\n    title\n    slug\n    category {\n      title\n      slug\n    }\n    PostImage {\n      title\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query IndexPageQuery {\n    homePage {\n      documentId\n      title\n      hero {\n        id\n        title\n        callToAction\n        image\n      }\n      blogPosts {\n        id\n        title\n        limit\n        sort\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n      poetryPosts {\n        id\n        title\n        limit\n        sort\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query IndexPageQuery {\n    homePage {\n      documentId\n      title\n      hero {\n        id\n        title\n        callToAction\n        image\n      }\n      blogPosts {\n        id\n        title\n        limit\n        sort\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n      poetryPosts {\n        id\n        title\n        limit\n        sort\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PoetryPageQuery {\n    poetryPage {\n      posts {\n        limit\n        sort\n        title\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query PoetryPageQuery {\n    poetryPage {\n      posts {\n        limit\n        sort\n        title\n        subTitle\n        category {\n          title\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n\n  query PostsPageQuery(\n    $category: String!\n    $limit: Int!\n    $sort: [String]\n    $locale: I18NLocaleCode!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      sort: $sort\n      status: PUBLISHED\n      pagination: { limit: $limit }\n    ) {\n      ...PostFieldsFragment\n    }\n  }\n"): (typeof documents)["\n  \n\n  query PostsPageQuery(\n    $category: String!\n    $limit: Int!\n    $sort: [String]\n    $locale: I18NLocaleCode!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      sort: $sort\n      status: PUBLISHED\n      pagination: { limit: $limit }\n    ) {\n      ...PostFieldsFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PostsPathQuery(\n    $category: String!\n    $locale: I18NLocaleCode!\n    $limit: Int!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      pagination: { limit: $limit }\n    ) {\n      slug\n    }\n  }\n"): (typeof documents)["\n  query PostsPathQuery(\n    $category: String!\n    $locale: I18NLocaleCode!\n    $limit: Int!\n  ) {\n    posts(\n      locale: $locale\n      filters: { category: { slug: { eq: $category } } }\n      pagination: { limit: $limit }\n    ) {\n      slug\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;