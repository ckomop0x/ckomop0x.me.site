/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  STRAPI_DateTime: any;
  STRAPI_JSON: any;
  STRAPI_PostContentDynamicZoneInput: any;
  STRAPI_Upload: any;
  STRAPI_Time: any;
  STRAPI_Date: any;
  STRAPI_Long: any;
  JSON: never;
};











type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};


type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type GraphQLSource = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly typeName: Maybe<Scalars['String']>;
  readonly fieldName: Maybe<Scalars['String']>;
};

type GraphQLSourceConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphQLSourceGroupConnection>;
};


type GraphQLSourceConnection_distinctArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphQLSourceFieldsEnum;
};

type GraphQLSourceEdge = {
  readonly next: Maybe<GraphQLSource>;
  readonly node: GraphQLSource;
  readonly previous: Maybe<GraphQLSource>;
};

enum GraphQLSourceFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  typeName = 'typeName',
  fieldName = 'fieldName'
}

type GraphQLSourceFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly typeName: Maybe<StringQueryOperatorInput>;
  readonly fieldName: Maybe<StringQueryOperatorInput>;
};

type GraphQLSourceGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GraphQLSourceSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GraphQLSourceFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly strapiCategories: Maybe<StrapiCategories>;
  readonly allStrapiCategories: StrapiCategoriesConnection;
  readonly strapiPosts: Maybe<StrapiPosts>;
  readonly allStrapiPosts: StrapiPostsConnection;
  readonly graphQlSource: Maybe<GraphQLSource>;
  readonly allGraphQlSource: GraphQLSourceConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly STRAPI: STRAPI;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<DateQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiCategoriesArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  strapiId: Maybe<StringQueryOperatorInput>;
};


type Query_allStrapiCategoriesArgs = {
  filter: Maybe<StrapiCategoriesFilterInput>;
  sort: Maybe<StrapiCategoriesSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_strapiPostsArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  published: Maybe<BooleanQueryOperatorInput>;
  category: Maybe<StringQueryOperatorInput>;
  featured: Maybe<BooleanQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  image_url: Maybe<StringQueryOperatorInput>;
  content: Maybe<StrapiPostsContentFilterListInput>;
  updated_by: Maybe<StrapiPostsUpdated_byFilterInput>;
  strapiId: Maybe<StringQueryOperatorInput>;
};


type Query_allStrapiPostsArgs = {
  filter: Maybe<StrapiPostsFilterInput>;
  sort: Maybe<StrapiPostsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_graphQlSourceArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  typeName: Maybe<StringQueryOperatorInput>;
  fieldName: Maybe<StringQueryOperatorInput>;
};


type Query_allGraphQlSourceArgs = {
  filter: Maybe<GraphQLSourceFilterInput>;
  sort: Maybe<GraphQLSourceSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Date']>;
  readonly host: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Site_portArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  buildTime = 'buildTime'
}

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata.title',
  siteMetadata___author___name = 'siteMetadata.author.name',
  siteMetadata___author___minibio = 'siteMetadata.author.minibio',
  siteMetadata___siteUrl = 'siteMetadata.siteUrl',
  siteMetadata___keywords = 'siteMetadata.keywords',
  siteMetadata___canonicalUrl = 'siteMetadata.canonicalUrl',
  siteMetadata___image = 'siteMetadata.image',
  siteMetadata___organization___name = 'siteMetadata.organization.name',
  siteMetadata___organization___url = 'siteMetadata.organization.url',
  siteMetadata___organization___logo = 'siteMetadata.organization.logo',
  siteMetadata___social___twitter = 'siteMetadata.social.twitter',
  siteMetadata___social___fbAppID = 'siteMetadata.social.fbAppID',
  port = 'port',
  host = 'host',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<DateQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageContext = {
  readonly slug: Maybe<Scalars['String']>;
  readonly post: Maybe<SitePageContextPost>;
};

type SitePageContextFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly post: Maybe<SitePageContextPostFilterInput>;
};

type SitePageContextPost = {
  readonly node: Maybe<SitePageContextPostNode>;
};

type SitePageContextPostFilterInput = {
  readonly node: Maybe<SitePageContextPostNodeFilterInput>;
};

type SitePageContextPostNode = {
  readonly category: Maybe<Scalars['String']>;
  readonly content: Maybe<ReadonlyArray<Maybe<SitePageContextPostNodeContent>>>;
  readonly image_url: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly published: Maybe<Scalars['Boolean']>;
  readonly strapiId: Maybe<Scalars['String']>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly title: Maybe<Scalars['String']>;
};


type SitePageContextPostNode_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SitePageContextPostNode_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SitePageContextPostNodeContent = {
  readonly rich_text: Maybe<Scalars['String']>;
};

type SitePageContextPostNodeContentFilterInput = {
  readonly rich_text: Maybe<StringQueryOperatorInput>;
};

type SitePageContextPostNodeContentFilterListInput = {
  readonly elemMatch: Maybe<SitePageContextPostNodeContentFilterInput>;
};

type SitePageContextPostNodeFilterInput = {
  readonly category: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<SitePageContextPostNodeContentFilterListInput>;
  readonly image_url: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly published: Maybe<BooleanQueryOperatorInput>;
  readonly strapiId: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___slug = 'context.slug',
  context___post___node___category = 'context.post.node.category',
  context___post___node___content = 'context.post.node.content',
  context___post___node___image_url = 'context.post.node.image_url',
  context___post___node___slug = 'context.post.node.slug',
  context___post___node___published = 'context.post.node.published',
  context___post___node___strapiId = 'context.post.node.strapiId',
  context___post___node___excerpt = 'context.post.node.excerpt',
  context___post___node___createdAt = 'context.post.node.createdAt',
  context___post___node___updatedAt = 'context.post.node.updatedAt',
  context___post___node___title = 'context.post.node.title',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___allowSyntheticDefaultImports = 'pluginCreator.pluginOptions.allowSyntheticDefaultImports',
  pluginCreator___pluginOptions___emitSchema___src___generated___gatsby_introspection_json = 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_introspection_json',
  pluginCreator___pluginOptions___emitPluginDocuments___src___generated___gatsby_plugin_documents_graphql = 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql',
  pluginCreator___pluginOptions___displayName = 'pluginCreator.pluginOptions.displayName',
  pluginCreator___pluginOptions___typeName = 'pluginCreator.pluginOptions.typeName',
  pluginCreator___pluginOptions___fieldName = 'pluginCreator.pluginOptions.fieldName',
  pluginCreator___pluginOptions___url = 'pluginCreator.pluginOptions.url',
  pluginCreator___pluginOptions___apiURL = 'pluginCreator.pluginOptions.apiURL',
  pluginCreator___pluginOptions___queryLimit = 'pluginCreator.pluginOptions.queryLimit',
  pluginCreator___pluginOptions___contentTypes = 'pluginCreator.pluginOptions.contentTypes',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
  pluginCreator___pluginOptions___description = 'pluginCreator.pluginOptions.description',
  pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
  pluginCreator___pluginOptions___lang = 'pluginCreator.pluginOptions.lang',
  pluginCreator___pluginOptions___background_color = 'pluginCreator.pluginOptions.background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator.pluginOptions.theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
  pluginCreator___pluginOptions___icons = 'pluginCreator.pluginOptions.icons',
  pluginCreator___pluginOptions___icons___src = 'pluginCreator.pluginOptions.icons.src',
  pluginCreator___pluginOptions___icons___sizes = 'pluginCreator.pluginOptions.icons.sizes',
  pluginCreator___pluginOptions___icons___type = 'pluginCreator.pluginOptions.icons.type',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator.pluginOptions.cache_busting_mode',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator.pluginOptions.include_favicon',
  pluginCreator___pluginOptions___legacy = 'pluginCreator.pluginOptions.legacy',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator.pluginOptions.theme_color_in_head',
  pluginCreator___pluginOptions___trackingId = 'pluginCreator.pluginOptions.trackingId',
  pluginCreator___pluginOptions___webvisor = 'pluginCreator.pluginOptions.webvisor',
  pluginCreator___pluginOptions___trackHash = 'pluginCreator.pluginOptions.trackHash',
  pluginCreator___pluginOptions___afterBody = 'pluginCreator.pluginOptions.afterBody',
  pluginCreator___pluginOptions___defer = 'pluginCreator.pluginOptions.defer',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___allowSyntheticDefaultImports = 'pluginOptions.allowSyntheticDefaultImports',
  pluginOptions___emitSchema___src___generated___gatsby_introspection_json = 'pluginOptions.emitSchema.src___generated___gatsby_introspection_json',
  pluginOptions___emitPluginDocuments___src___generated___gatsby_plugin_documents_graphql = 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql',
  pluginOptions___displayName = 'pluginOptions.displayName',
  pluginOptions___typeName = 'pluginOptions.typeName',
  pluginOptions___fieldName = 'pluginOptions.fieldName',
  pluginOptions___url = 'pluginOptions.url',
  pluginOptions___apiURL = 'pluginOptions.apiURL',
  pluginOptions___queryLimit = 'pluginOptions.queryLimit',
  pluginOptions___contentTypes = 'pluginOptions.contentTypes',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___short_name = 'pluginOptions.short_name',
  pluginOptions___description = 'pluginOptions.description',
  pluginOptions___start_url = 'pluginOptions.start_url',
  pluginOptions___lang = 'pluginOptions.lang',
  pluginOptions___background_color = 'pluginOptions.background_color',
  pluginOptions___theme_color = 'pluginOptions.theme_color',
  pluginOptions___display = 'pluginOptions.display',
  pluginOptions___icons = 'pluginOptions.icons',
  pluginOptions___icons___src = 'pluginOptions.icons.src',
  pluginOptions___icons___sizes = 'pluginOptions.icons.sizes',
  pluginOptions___icons___type = 'pluginOptions.icons.type',
  pluginOptions___cache_busting_mode = 'pluginOptions.cache_busting_mode',
  pluginOptions___include_favicon = 'pluginOptions.include_favicon',
  pluginOptions___legacy = 'pluginOptions.legacy',
  pluginOptions___theme_color_in_head = 'pluginOptions.theme_color_in_head',
  pluginOptions___trackingId = 'pluginOptions.trackingId',
  pluginOptions___webvisor = 'pluginOptions.webvisor',
  pluginOptions___trackHash = 'pluginOptions.trackHash',
  pluginOptions___afterBody = 'pluginOptions.afterBody',
  pluginOptions___defer = 'pluginOptions.defer',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly allowSyntheticDefaultImports: Maybe<Scalars['Boolean']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>;
  readonly displayName: Maybe<Scalars['Boolean']>;
  readonly typeName: Maybe<Scalars['String']>;
  readonly fieldName: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly apiURL: Maybe<Scalars['String']>;
  readonly queryLimit: Maybe<Scalars['Int']>;
  readonly contentTypes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly lang: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icons: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsIcons>>>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly trackingId: Maybe<Scalars['Int']>;
  readonly webvisor: Maybe<Scalars['Boolean']>;
  readonly trackHash: Maybe<Scalars['Boolean']>;
  readonly afterBody: Maybe<Scalars['Boolean']>;
  readonly defer: Maybe<Scalars['Boolean']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly src___generated___gatsby_introspection_json: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly src___generated___gatsby_introspection_json: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly allowSyntheticDefaultImports: Maybe<BooleanQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>;
  readonly displayName: Maybe<BooleanQueryOperatorInput>;
  readonly typeName: Maybe<StringQueryOperatorInput>;
  readonly fieldName: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly apiURL: Maybe<StringQueryOperatorInput>;
  readonly queryLimit: Maybe<IntQueryOperatorInput>;
  readonly contentTypes: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icons: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly trackingId: Maybe<IntQueryOperatorInput>;
  readonly webvisor: Maybe<BooleanQueryOperatorInput>;
  readonly trackHash: Maybe<BooleanQueryOperatorInput>;
  readonly afterBody: Maybe<BooleanQueryOperatorInput>;
  readonly defer: Maybe<BooleanQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsIcons = {
  readonly src: Maybe<Scalars['String']>;
  readonly sizes: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsIconsFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsIconsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly author: Maybe<SiteSiteMetadataAuthor>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly canonicalUrl: Maybe<Scalars['String']>;
  readonly image: Maybe<Scalars['String']>;
  readonly organization: Maybe<SiteSiteMetadataOrganization>;
  readonly social: Maybe<SiteSiteMetadataSocial>;
};

type SiteSiteMetadataAuthor = {
  readonly name: Maybe<Scalars['String']>;
  readonly minibio: Maybe<Scalars['String']>;
};

type SiteSiteMetadataAuthorFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly minibio: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<SiteSiteMetadataAuthorFilterInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
  readonly canonicalUrl: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<StringQueryOperatorInput>;
  readonly organization: Maybe<SiteSiteMetadataOrganizationFilterInput>;
  readonly social: Maybe<SiteSiteMetadataSocialFilterInput>;
};

type SiteSiteMetadataOrganization = {
  readonly name: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly logo: Maybe<Scalars['String']>;
};

type SiteSiteMetadataOrganizationFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly logo: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataSocial = {
  readonly twitter: Maybe<Scalars['String']>;
  readonly fbAppID: Maybe<Scalars['String']>;
};

type SiteSiteMetadataSocialFilterInput = {
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly fbAppID: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

type STRAPI = {
  readonly category: Maybe<STRAPI_Category>;
  readonly categories: Maybe<ReadonlyArray<Maybe<STRAPI_Category>>>;
  readonly categoriesConnection: Maybe<STRAPI_CategoryConnection>;
  readonly post: Maybe<STRAPI_Post>;
  readonly posts: Maybe<ReadonlyArray<Maybe<STRAPI_Post>>>;
  readonly postsConnection: Maybe<STRAPI_PostConnection>;
  readonly files: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFile>>>;
  readonly filesConnection: Maybe<STRAPI_UploadFileConnection>;
  readonly role: Maybe<STRAPI_UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  readonly roles: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsRole>>>;
  readonly rolesConnection: Maybe<STRAPI_UsersPermissionsRoleConnection>;
  readonly user: Maybe<STRAPI_UsersPermissionsUser>;
  readonly users: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUser>>>;
  readonly usersConnection: Maybe<STRAPI_UsersPermissionsUserConnection>;
  readonly me: Maybe<STRAPI_UsersPermissionsMe>;
};


type STRAPI_categoryArgs = {
  id: Scalars['ID'];
};


type STRAPI_categoriesArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['STRAPI_JSON']>;
};


type STRAPI_categoriesConnectionArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['STRAPI_JSON']>;
};


type STRAPI_postArgs = {
  id: Scalars['ID'];
};


type STRAPI_postsArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['STRAPI_JSON']>;
};


type STRAPI_postsConnectionArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['STRAPI_JSON']>;
};


type STRAPI_filesArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['STRAPI_JSON']>;
};


type STRAPI_filesConnectionArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['STRAPI_JSON']>;
};


type STRAPI_roleArgs = {
  id: Scalars['ID'];
};


type STRAPI_rolesArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['STRAPI_JSON']>;
};


type STRAPI_rolesConnectionArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['STRAPI_JSON']>;
};


type STRAPI_userArgs = {
  id: Scalars['ID'];
};


type STRAPI_usersArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['STRAPI_JSON']>;
};


type STRAPI_usersConnectionArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['STRAPI_JSON']>;
};

type STRAPI_AdminUser = {
  readonly id: Scalars['ID'];
  readonly username: Maybe<Scalars['String']>;
};

enum STRAPI_CacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

type STRAPI_Category = {
  readonly id: Scalars['ID'];
  readonly _id: Scalars['ID'];
  readonly createdAt: Scalars['STRAPI_DateTime'];
  readonly updatedAt: Scalars['STRAPI_DateTime'];
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Scalars['String'];
  readonly created_by: Maybe<STRAPI_AdminUser>;
  readonly updated_by: Maybe<STRAPI_AdminUser>;
};

type STRAPI_CategoryAggregator = {
  readonly count: Maybe<Scalars['Int']>;
  readonly totalCount: Maybe<Scalars['Int']>;
};

type STRAPI_CategoryConnection = {
  readonly values: Maybe<ReadonlyArray<Maybe<STRAPI_Category>>>;
  readonly groupBy: Maybe<STRAPI_CategoryGroupBy>;
  readonly aggregate: Maybe<STRAPI_CategoryAggregator>;
};

type STRAPI_CategoryConnection_id = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_CategoryConnection>;
};

type STRAPI_CategoryConnectionCreated_by = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_CategoryConnection>;
};

type STRAPI_CategoryConnectionCreatedAt = {
  readonly key: Maybe<Scalars['STRAPI_DateTime']>;
  readonly connection: Maybe<STRAPI_CategoryConnection>;
};

type STRAPI_CategoryConnectionId = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_CategoryConnection>;
};

type STRAPI_CategoryConnectionName = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_CategoryConnection>;
};

type STRAPI_CategoryConnectionSlug = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_CategoryConnection>;
};

type STRAPI_CategoryConnectionUpdated_by = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_CategoryConnection>;
};

type STRAPI_CategoryConnectionUpdatedAt = {
  readonly key: Maybe<Scalars['STRAPI_DateTime']>;
  readonly connection: Maybe<STRAPI_CategoryConnection>;
};

type STRAPI_CategoryGroupBy = {
  readonly id: Maybe<ReadonlyArray<Maybe<STRAPI_CategoryConnectionId>>>;
  readonly _id: Maybe<ReadonlyArray<Maybe<STRAPI_CategoryConnection_id>>>;
  readonly createdAt: Maybe<ReadonlyArray<Maybe<STRAPI_CategoryConnectionCreatedAt>>>;
  readonly updatedAt: Maybe<ReadonlyArray<Maybe<STRAPI_CategoryConnectionUpdatedAt>>>;
  readonly name: Maybe<ReadonlyArray<Maybe<STRAPI_CategoryConnectionName>>>;
  readonly slug: Maybe<ReadonlyArray<Maybe<STRAPI_CategoryConnectionSlug>>>;
  readonly created_by: Maybe<ReadonlyArray<Maybe<STRAPI_CategoryConnectionCreated_by>>>;
  readonly updated_by: Maybe<ReadonlyArray<Maybe<STRAPI_CategoryConnectionUpdated_by>>>;
};

type STRAPI_CategoryInput = {
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Scalars['String'];
  readonly created_by: Maybe<Scalars['ID']>;
  readonly updated_by: Maybe<Scalars['ID']>;
};

type STRAPI_ComponentPostRichText = {
  readonly id: Scalars['ID'];
  readonly _id: Scalars['ID'];
  readonly createdAt: Scalars['STRAPI_DateTime'];
  readonly updatedAt: Scalars['STRAPI_DateTime'];
  readonly rich_text: Maybe<Scalars['String']>;
};

type STRAPI_ComponentPostRichTextInput = {
  readonly rich_text: Maybe<Scalars['String']>;
};

type STRAPI_createCategoryInput = {
  readonly data: Maybe<STRAPI_CategoryInput>;
};

type STRAPI_createCategoryPayload = {
  readonly category: Maybe<STRAPI_Category>;
};

type STRAPI_createPostInput = {
  readonly data: Maybe<STRAPI_PostInput>;
};

type STRAPI_createPostPayload = {
  readonly post: Maybe<STRAPI_Post>;
};

type STRAPI_createRoleInput = {
  readonly data: Maybe<STRAPI_RoleInput>;
};

type STRAPI_createRolePayload = {
  readonly role: Maybe<STRAPI_UsersPermissionsRole>;
};

type STRAPI_createUserInput = {
  readonly data: Maybe<STRAPI_UserInput>;
};

type STRAPI_createUserPayload = {
  readonly user: Maybe<STRAPI_UsersPermissionsUser>;
};



type STRAPI_deleteCategoryInput = {
  readonly where: Maybe<STRAPI_InputID>;
};

type STRAPI_deleteCategoryPayload = {
  readonly category: Maybe<STRAPI_Category>;
};

type STRAPI_deletePostInput = {
  readonly where: Maybe<STRAPI_InputID>;
};

type STRAPI_deletePostPayload = {
  readonly post: Maybe<STRAPI_Post>;
};

type STRAPI_deleteRoleInput = {
  readonly where: Maybe<STRAPI_InputID>;
};

type STRAPI_deleteRolePayload = {
  readonly role: Maybe<STRAPI_UsersPermissionsRole>;
};

type STRAPI_deleteUserInput = {
  readonly where: Maybe<STRAPI_InputID>;
};

type STRAPI_deleteUserPayload = {
  readonly user: Maybe<STRAPI_UsersPermissionsUser>;
};

type STRAPI_editCategoryInput = {
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly created_by: Maybe<Scalars['ID']>;
  readonly updated_by: Maybe<Scalars['ID']>;
};

type STRAPI_editComponentPostRichTextInput = {
  readonly id: Maybe<Scalars['ID']>;
  readonly rich_text: Maybe<Scalars['String']>;
};

type STRAPI_editFileInput = {
  readonly name: Maybe<Scalars['String']>;
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly formats: Maybe<Scalars['STRAPI_JSON']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly mime: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly url: Maybe<Scalars['String']>;
  readonly previewUrl: Maybe<Scalars['String']>;
  readonly provider: Maybe<Scalars['String']>;
  readonly provider_metadata: Maybe<Scalars['STRAPI_JSON']>;
  readonly related: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly created_by: Maybe<Scalars['ID']>;
  readonly updated_by: Maybe<Scalars['ID']>;
};

type STRAPI_editPostInput = {
  readonly title: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['STRAPI_DateTime']>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly image: Maybe<Scalars['ID']>;
  readonly description: Maybe<Scalars['String']>;
  readonly published: Maybe<Scalars['Boolean']>;
  readonly image_url: Maybe<Scalars['String']>;
  readonly category: Maybe<STRAPI_ENUM_POST_CATEGORY>;
  readonly slug: Maybe<Scalars['String']>;
  readonly featured: Maybe<Scalars['Boolean']>;
  readonly content: Maybe<ReadonlyArray<Scalars['STRAPI_PostContentDynamicZoneInput']>>;
  readonly created_by: Maybe<Scalars['ID']>;
  readonly updated_by: Maybe<Scalars['ID']>;
};

type STRAPI_editRoleInput = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly permissions: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly users: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly created_by: Maybe<Scalars['ID']>;
  readonly updated_by: Maybe<Scalars['ID']>;
};

type STRAPI_editUserInput = {
  readonly username: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly provider: Maybe<Scalars['String']>;
  readonly password: Maybe<Scalars['String']>;
  readonly resetPasswordToken: Maybe<Scalars['String']>;
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly blocked: Maybe<Scalars['Boolean']>;
  readonly role: Maybe<Scalars['ID']>;
  readonly created_by: Maybe<Scalars['ID']>;
  readonly updated_by: Maybe<Scalars['ID']>;
};

enum STRAPI_ENUM_POST_CATEGORY {
  poetry = 'poetry',
  blog = 'blog',
  unsorted = 'unsorted'
}

type STRAPI_FileInput = {
  readonly name: Scalars['String'];
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly formats: Maybe<Scalars['STRAPI_JSON']>;
  readonly hash: Scalars['String'];
  readonly ext: Maybe<Scalars['String']>;
  readonly mime: Scalars['String'];
  readonly size: Scalars['Float'];
  readonly url: Scalars['String'];
  readonly previewUrl: Maybe<Scalars['String']>;
  readonly provider: Scalars['String'];
  readonly provider_metadata: Maybe<Scalars['STRAPI_JSON']>;
  readonly related: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly created_by: Maybe<Scalars['ID']>;
  readonly updated_by: Maybe<Scalars['ID']>;
};

type STRAPI_InputID = {
  readonly id: Scalars['ID'];
};



type STRAPI_Morph = STRAPI_UsersPermissionsMe | STRAPI_UsersPermissionsMeRole | STRAPI_UsersPermissionsLoginPayload | STRAPI_UserPermissionsPasswordPayload | STRAPI_Category | STRAPI_CategoryConnection | STRAPI_CategoryAggregator | STRAPI_CategoryGroupBy | STRAPI_CategoryConnectionId | STRAPI_CategoryConnection_id | STRAPI_CategoryConnectionCreatedAt | STRAPI_CategoryConnectionUpdatedAt | STRAPI_CategoryConnectionName | STRAPI_CategoryConnectionSlug | STRAPI_CategoryConnectionCreated_by | STRAPI_CategoryConnectionUpdated_by | STRAPI_createCategoryPayload | STRAPI_updateCategoryPayload | STRAPI_deleteCategoryPayload | STRAPI_Post | STRAPI_PostConnection | STRAPI_PostAggregator | STRAPI_PostGroupBy | STRAPI_PostConnectionId | STRAPI_PostConnection_id | STRAPI_PostConnectionCreatedAt | STRAPI_PostConnectionUpdatedAt | STRAPI_PostConnectionTitle | STRAPI_PostConnectionDate | STRAPI_PostConnectionExcerpt | STRAPI_PostConnectionImage | STRAPI_PostConnectionDescription | STRAPI_PostConnectionPublished | STRAPI_PostConnectionImage_url | STRAPI_PostConnectionCategory | STRAPI_PostConnectionSlug | STRAPI_PostConnectionFeatured | STRAPI_PostConnectionCreated_by | STRAPI_PostConnectionUpdated_by | STRAPI_createPostPayload | STRAPI_updatePostPayload | STRAPI_deletePostPayload | STRAPI_UploadFile | STRAPI_UploadFileConnection | STRAPI_UploadFileAggregator | STRAPI_UploadFileAggregatorSum | STRAPI_UploadFileAggregatorAvg | STRAPI_UploadFileAggregatorMin | STRAPI_UploadFileAggregatorMax | STRAPI_UploadFileGroupBy | STRAPI_UploadFileConnectionId | STRAPI_UploadFileConnection_id | STRAPI_UploadFileConnectionCreatedAt | STRAPI_UploadFileConnectionUpdatedAt | STRAPI_UploadFileConnectionName | STRAPI_UploadFileConnectionAlternativeText | STRAPI_UploadFileConnectionCaption | STRAPI_UploadFileConnectionWidth | STRAPI_UploadFileConnectionHeight | STRAPI_UploadFileConnectionFormats | STRAPI_UploadFileConnectionHash | STRAPI_UploadFileConnectionExt | STRAPI_UploadFileConnectionMime | STRAPI_UploadFileConnectionSize | STRAPI_UploadFileConnectionUrl | STRAPI_UploadFileConnectionPreviewUrl | STRAPI_UploadFileConnectionProvider | STRAPI_UploadFileConnectionProvider_metadata | STRAPI_UploadFileConnectionCreated_by | STRAPI_UploadFileConnectionUpdated_by | STRAPI_UsersPermissionsPermission | STRAPI_UsersPermissionsRole | STRAPI_UsersPermissionsRoleConnection | STRAPI_UsersPermissionsRoleAggregator | STRAPI_UsersPermissionsRoleGroupBy | STRAPI_UsersPermissionsRoleConnectionId | STRAPI_UsersPermissionsRoleConnection_id | STRAPI_UsersPermissionsRoleConnectionCreatedAt | STRAPI_UsersPermissionsRoleConnectionUpdatedAt | STRAPI_UsersPermissionsRoleConnectionName | STRAPI_UsersPermissionsRoleConnectionDescription | STRAPI_UsersPermissionsRoleConnectionType | STRAPI_UsersPermissionsRoleConnectionCreated_by | STRAPI_UsersPermissionsRoleConnectionUpdated_by | STRAPI_createRolePayload | STRAPI_updateRolePayload | STRAPI_deleteRolePayload | STRAPI_UsersPermissionsUser | STRAPI_UsersPermissionsUserConnection | STRAPI_UsersPermissionsUserAggregator | STRAPI_UsersPermissionsUserGroupBy | STRAPI_UsersPermissionsUserConnectionId | STRAPI_UsersPermissionsUserConnection_id | STRAPI_UsersPermissionsUserConnectionCreatedAt | STRAPI_UsersPermissionsUserConnectionUpdatedAt | STRAPI_UsersPermissionsUserConnectionUsername | STRAPI_UsersPermissionsUserConnectionEmail | STRAPI_UsersPermissionsUserConnectionProvider | STRAPI_UsersPermissionsUserConnectionConfirmed | STRAPI_UsersPermissionsUserConnectionBlocked | STRAPI_UsersPermissionsUserConnectionRole | STRAPI_UsersPermissionsUserConnectionCreated_by | STRAPI_UsersPermissionsUserConnectionUpdated_by | STRAPI_createUserPayload | STRAPI_updateUserPayload | STRAPI_deleteUserPayload | STRAPI_ComponentPostRichText;

type STRAPI_Post = {
  readonly id: Scalars['ID'];
  readonly _id: Scalars['ID'];
  readonly createdAt: Scalars['STRAPI_DateTime'];
  readonly updatedAt: Scalars['STRAPI_DateTime'];
  readonly title: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['STRAPI_DateTime']>;
  readonly excerpt: Scalars['String'];
  readonly image: Maybe<STRAPI_UploadFile>;
  readonly description: Maybe<Scalars['String']>;
  readonly published: Maybe<Scalars['Boolean']>;
  readonly image_url: Maybe<Scalars['String']>;
  readonly category: STRAPI_ENUM_POST_CATEGORY;
  readonly slug: Scalars['String'];
  readonly featured: Maybe<Scalars['Boolean']>;
  readonly content: Maybe<ReadonlyArray<Maybe<STRAPI_PostContentDynamicZone>>>;
  readonly created_by: Maybe<STRAPI_AdminUser>;
  readonly updated_by: Maybe<STRAPI_AdminUser>;
};

type STRAPI_PostAggregator = {
  readonly count: Maybe<Scalars['Int']>;
  readonly totalCount: Maybe<Scalars['Int']>;
};

type STRAPI_PostConnection = {
  readonly values: Maybe<ReadonlyArray<Maybe<STRAPI_Post>>>;
  readonly groupBy: Maybe<STRAPI_PostGroupBy>;
  readonly aggregate: Maybe<STRAPI_PostAggregator>;
};

type STRAPI_PostConnection_id = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionCategory = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionCreated_by = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionCreatedAt = {
  readonly key: Maybe<Scalars['STRAPI_DateTime']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionDate = {
  readonly key: Maybe<Scalars['STRAPI_DateTime']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionDescription = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionExcerpt = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionFeatured = {
  readonly key: Maybe<Scalars['Boolean']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionId = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionImage = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionImage_url = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionPublished = {
  readonly key: Maybe<Scalars['Boolean']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionSlug = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionTitle = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionUpdated_by = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostConnectionUpdatedAt = {
  readonly key: Maybe<Scalars['STRAPI_DateTime']>;
  readonly connection: Maybe<STRAPI_PostConnection>;
};

type STRAPI_PostContentDynamicZone = STRAPI_ComponentPostRichText;


type STRAPI_PostGroupBy = {
  readonly id: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionId>>>;
  readonly _id: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnection_id>>>;
  readonly createdAt: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionCreatedAt>>>;
  readonly updatedAt: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionUpdatedAt>>>;
  readonly title: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionTitle>>>;
  readonly date: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionDate>>>;
  readonly excerpt: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionExcerpt>>>;
  readonly image: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionImage>>>;
  readonly description: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionDescription>>>;
  readonly published: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionPublished>>>;
  readonly image_url: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionImage_url>>>;
  readonly category: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionCategory>>>;
  readonly slug: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionSlug>>>;
  readonly featured: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionFeatured>>>;
  readonly created_by: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionCreated_by>>>;
  readonly updated_by: Maybe<ReadonlyArray<Maybe<STRAPI_PostConnectionUpdated_by>>>;
};

type STRAPI_PostInput = {
  readonly title: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['STRAPI_DateTime']>;
  readonly excerpt: Scalars['String'];
  readonly image: Maybe<Scalars['ID']>;
  readonly description: Maybe<Scalars['String']>;
  readonly published: Maybe<Scalars['Boolean']>;
  readonly image_url: Maybe<Scalars['String']>;
  readonly category: Maybe<STRAPI_ENUM_POST_CATEGORY>;
  readonly slug: Scalars['String'];
  readonly featured: Maybe<Scalars['Boolean']>;
  readonly content: Maybe<ReadonlyArray<Scalars['STRAPI_PostContentDynamicZoneInput']>>;
  readonly created_by: Maybe<Scalars['ID']>;
  readonly updated_by: Maybe<Scalars['ID']>;
};

type STRAPI_RoleInput = {
  readonly name: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly permissions: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly users: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly created_by: Maybe<Scalars['ID']>;
  readonly updated_by: Maybe<Scalars['ID']>;
};


type STRAPI_updateCategoryInput = {
  readonly where: Maybe<STRAPI_InputID>;
  readonly data: Maybe<STRAPI_editCategoryInput>;
};

type STRAPI_updateCategoryPayload = {
  readonly category: Maybe<STRAPI_Category>;
};

type STRAPI_updatePostInput = {
  readonly where: Maybe<STRAPI_InputID>;
  readonly data: Maybe<STRAPI_editPostInput>;
};

type STRAPI_updatePostPayload = {
  readonly post: Maybe<STRAPI_Post>;
};

type STRAPI_updateRoleInput = {
  readonly where: Maybe<STRAPI_InputID>;
  readonly data: Maybe<STRAPI_editRoleInput>;
};

type STRAPI_updateRolePayload = {
  readonly role: Maybe<STRAPI_UsersPermissionsRole>;
};

type STRAPI_updateUserInput = {
  readonly where: Maybe<STRAPI_InputID>;
  readonly data: Maybe<STRAPI_editUserInput>;
};

type STRAPI_updateUserPayload = {
  readonly user: Maybe<STRAPI_UsersPermissionsUser>;
};


type STRAPI_UploadFile = {
  readonly id: Scalars['ID'];
  readonly _id: Scalars['ID'];
  readonly createdAt: Scalars['STRAPI_DateTime'];
  readonly updatedAt: Scalars['STRAPI_DateTime'];
  readonly name: Scalars['String'];
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly formats: Maybe<Scalars['STRAPI_JSON']>;
  readonly hash: Scalars['String'];
  readonly ext: Maybe<Scalars['String']>;
  readonly mime: Scalars['String'];
  readonly size: Scalars['Float'];
  readonly url: Scalars['String'];
  readonly previewUrl: Maybe<Scalars['String']>;
  readonly provider: Scalars['String'];
  readonly provider_metadata: Maybe<Scalars['STRAPI_JSON']>;
  readonly created_by: Maybe<STRAPI_AdminUser>;
  readonly updated_by: Maybe<STRAPI_AdminUser>;
  readonly related: Maybe<ReadonlyArray<Maybe<STRAPI_Morph>>>;
};


type STRAPI_UploadFile_relatedArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['STRAPI_JSON']>;
};

type STRAPI_UploadFileAggregator = {
  readonly count: Maybe<Scalars['Int']>;
  readonly totalCount: Maybe<Scalars['Int']>;
  readonly sum: Maybe<STRAPI_UploadFileAggregatorSum>;
  readonly avg: Maybe<STRAPI_UploadFileAggregatorAvg>;
  readonly min: Maybe<STRAPI_UploadFileAggregatorMin>;
  readonly max: Maybe<STRAPI_UploadFileAggregatorMax>;
};

type STRAPI_UploadFileAggregatorAvg = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly size: Maybe<Scalars['Float']>;
};

type STRAPI_UploadFileAggregatorMax = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly size: Maybe<Scalars['Float']>;
};

type STRAPI_UploadFileAggregatorMin = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly size: Maybe<Scalars['Float']>;
};

type STRAPI_UploadFileAggregatorSum = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly size: Maybe<Scalars['Float']>;
};

type STRAPI_UploadFileConnection = {
  readonly values: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFile>>>;
  readonly groupBy: Maybe<STRAPI_UploadFileGroupBy>;
  readonly aggregate: Maybe<STRAPI_UploadFileAggregator>;
};

type STRAPI_UploadFileConnection_id = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionAlternativeText = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionCaption = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionCreated_by = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionCreatedAt = {
  readonly key: Maybe<Scalars['STRAPI_DateTime']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionExt = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionFormats = {
  readonly key: Maybe<Scalars['STRAPI_JSON']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionHash = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionHeight = {
  readonly key: Maybe<Scalars['Int']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionId = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionMime = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionName = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionPreviewUrl = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionProvider = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionProvider_metadata = {
  readonly key: Maybe<Scalars['STRAPI_JSON']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionSize = {
  readonly key: Maybe<Scalars['Float']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionUpdated_by = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionUpdatedAt = {
  readonly key: Maybe<Scalars['STRAPI_DateTime']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionUrl = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileConnectionWidth = {
  readonly key: Maybe<Scalars['Int']>;
  readonly connection: Maybe<STRAPI_UploadFileConnection>;
};

type STRAPI_UploadFileGroupBy = {
  readonly id: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionId>>>;
  readonly _id: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnection_id>>>;
  readonly createdAt: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionCreatedAt>>>;
  readonly updatedAt: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionUpdatedAt>>>;
  readonly name: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionName>>>;
  readonly alternativeText: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionAlternativeText>>>;
  readonly caption: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionCaption>>>;
  readonly width: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionWidth>>>;
  readonly height: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionHeight>>>;
  readonly formats: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionFormats>>>;
  readonly hash: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionHash>>>;
  readonly ext: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionExt>>>;
  readonly mime: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionMime>>>;
  readonly size: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionSize>>>;
  readonly url: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionUrl>>>;
  readonly previewUrl: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionPreviewUrl>>>;
  readonly provider: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionProvider>>>;
  readonly provider_metadata: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionProvider_metadata>>>;
  readonly created_by: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionCreated_by>>>;
  readonly updated_by: Maybe<ReadonlyArray<Maybe<STRAPI_UploadFileConnectionUpdated_by>>>;
};

type STRAPI_UserInput = {
  readonly username: Scalars['String'];
  readonly email: Scalars['String'];
  readonly provider: Maybe<Scalars['String']>;
  readonly password: Maybe<Scalars['String']>;
  readonly resetPasswordToken: Maybe<Scalars['String']>;
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly blocked: Maybe<Scalars['Boolean']>;
  readonly role: Maybe<Scalars['ID']>;
  readonly created_by: Maybe<Scalars['ID']>;
  readonly updated_by: Maybe<Scalars['ID']>;
};

type STRAPI_UserPermissionsPasswordPayload = {
  readonly ok: Scalars['Boolean'];
};

type STRAPI_UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String'];
  readonly password: Scalars['String'];
  readonly provider: Maybe<Scalars['String']>;
};

type STRAPI_UsersPermissionsLoginPayload = {
  readonly jwt: Maybe<Scalars['String']>;
  readonly user: STRAPI_UsersPermissionsMe;
};

type STRAPI_UsersPermissionsMe = {
  readonly id: Scalars['ID'];
  readonly username: Scalars['String'];
  readonly email: Scalars['String'];
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly blocked: Maybe<Scalars['Boolean']>;
  readonly role: Maybe<STRAPI_UsersPermissionsMeRole>;
};

type STRAPI_UsersPermissionsMeRole = {
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type STRAPI_UsersPermissionsPermission = {
  readonly id: Scalars['ID'];
  readonly _id: Scalars['ID'];
  readonly createdAt: Scalars['STRAPI_DateTime'];
  readonly updatedAt: Scalars['STRAPI_DateTime'];
  readonly type: Scalars['String'];
  readonly controller: Scalars['String'];
  readonly action: Scalars['String'];
  readonly enabled: Scalars['Boolean'];
  readonly policy: Maybe<Scalars['String']>;
  readonly role: Maybe<STRAPI_UsersPermissionsRole>;
  readonly created_by: Maybe<STRAPI_AdminUser>;
  readonly updated_by: Maybe<STRAPI_AdminUser>;
};

type STRAPI_UsersPermissionsRegisterInput = {
  readonly username: Scalars['String'];
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
};

type STRAPI_UsersPermissionsRole = {
  readonly id: Scalars['ID'];
  readonly _id: Scalars['ID'];
  readonly createdAt: Scalars['STRAPI_DateTime'];
  readonly updatedAt: Scalars['STRAPI_DateTime'];
  readonly name: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly created_by: Maybe<STRAPI_AdminUser>;
  readonly updated_by: Maybe<STRAPI_AdminUser>;
  readonly permissions: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsPermission>>>;
  readonly users: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUser>>>;
};


type STRAPI_UsersPermissionsRole_permissionsArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['STRAPI_JSON']>;
};


type STRAPI_UsersPermissionsRole_usersArgs = {
  sort: Maybe<Scalars['String']>;
  limit: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
  where: Maybe<Scalars['STRAPI_JSON']>;
};

type STRAPI_UsersPermissionsRoleAggregator = {
  readonly count: Maybe<Scalars['Int']>;
  readonly totalCount: Maybe<Scalars['Int']>;
};

type STRAPI_UsersPermissionsRoleConnection = {
  readonly values: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsRole>>>;
  readonly groupBy: Maybe<STRAPI_UsersPermissionsRoleGroupBy>;
  readonly aggregate: Maybe<STRAPI_UsersPermissionsRoleAggregator>;
};

type STRAPI_UsersPermissionsRoleConnection_id = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsRoleConnection>;
};

type STRAPI_UsersPermissionsRoleConnectionCreated_by = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsRoleConnection>;
};

type STRAPI_UsersPermissionsRoleConnectionCreatedAt = {
  readonly key: Maybe<Scalars['STRAPI_DateTime']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsRoleConnection>;
};

type STRAPI_UsersPermissionsRoleConnectionDescription = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsRoleConnection>;
};

type STRAPI_UsersPermissionsRoleConnectionId = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsRoleConnection>;
};

type STRAPI_UsersPermissionsRoleConnectionName = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsRoleConnection>;
};

type STRAPI_UsersPermissionsRoleConnectionType = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsRoleConnection>;
};

type STRAPI_UsersPermissionsRoleConnectionUpdated_by = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsRoleConnection>;
};

type STRAPI_UsersPermissionsRoleConnectionUpdatedAt = {
  readonly key: Maybe<Scalars['STRAPI_DateTime']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsRoleConnection>;
};

type STRAPI_UsersPermissionsRoleGroupBy = {
  readonly id: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsRoleConnectionId>>>;
  readonly _id: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsRoleConnection_id>>>;
  readonly createdAt: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsRoleConnectionCreatedAt>>>;
  readonly updatedAt: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsRoleConnectionUpdatedAt>>>;
  readonly name: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsRoleConnectionName>>>;
  readonly description: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsRoleConnectionDescription>>>;
  readonly type: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsRoleConnectionType>>>;
  readonly created_by: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsRoleConnectionCreated_by>>>;
  readonly updated_by: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsRoleConnectionUpdated_by>>>;
};

type STRAPI_UsersPermissionsUser = {
  readonly id: Scalars['ID'];
  readonly _id: Scalars['ID'];
  readonly createdAt: Scalars['STRAPI_DateTime'];
  readonly updatedAt: Scalars['STRAPI_DateTime'];
  readonly username: Scalars['String'];
  readonly email: Scalars['String'];
  readonly provider: Maybe<Scalars['String']>;
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly blocked: Maybe<Scalars['Boolean']>;
  readonly role: Maybe<STRAPI_UsersPermissionsRole>;
  readonly created_by: Maybe<STRAPI_AdminUser>;
  readonly updated_by: Maybe<STRAPI_AdminUser>;
};

type STRAPI_UsersPermissionsUserAggregator = {
  readonly count: Maybe<Scalars['Int']>;
  readonly totalCount: Maybe<Scalars['Int']>;
};

type STRAPI_UsersPermissionsUserConnection = {
  readonly values: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUser>>>;
  readonly groupBy: Maybe<STRAPI_UsersPermissionsUserGroupBy>;
  readonly aggregate: Maybe<STRAPI_UsersPermissionsUserAggregator>;
};

type STRAPI_UsersPermissionsUserConnection_id = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsUserConnection>;
};

type STRAPI_UsersPermissionsUserConnectionBlocked = {
  readonly key: Maybe<Scalars['Boolean']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsUserConnection>;
};

type STRAPI_UsersPermissionsUserConnectionConfirmed = {
  readonly key: Maybe<Scalars['Boolean']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsUserConnection>;
};

type STRAPI_UsersPermissionsUserConnectionCreated_by = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsUserConnection>;
};

type STRAPI_UsersPermissionsUserConnectionCreatedAt = {
  readonly key: Maybe<Scalars['STRAPI_DateTime']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsUserConnection>;
};

type STRAPI_UsersPermissionsUserConnectionEmail = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsUserConnection>;
};

type STRAPI_UsersPermissionsUserConnectionId = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsUserConnection>;
};

type STRAPI_UsersPermissionsUserConnectionProvider = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsUserConnection>;
};

type STRAPI_UsersPermissionsUserConnectionRole = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsUserConnection>;
};

type STRAPI_UsersPermissionsUserConnectionUpdated_by = {
  readonly key: Maybe<Scalars['ID']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsUserConnection>;
};

type STRAPI_UsersPermissionsUserConnectionUpdatedAt = {
  readonly key: Maybe<Scalars['STRAPI_DateTime']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsUserConnection>;
};

type STRAPI_UsersPermissionsUserConnectionUsername = {
  readonly key: Maybe<Scalars['String']>;
  readonly connection: Maybe<STRAPI_UsersPermissionsUserConnection>;
};

type STRAPI_UsersPermissionsUserGroupBy = {
  readonly id: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUserConnectionId>>>;
  readonly _id: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUserConnection_id>>>;
  readonly createdAt: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUserConnectionCreatedAt>>>;
  readonly updatedAt: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUserConnectionUpdatedAt>>>;
  readonly username: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUserConnectionUsername>>>;
  readonly email: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUserConnectionEmail>>>;
  readonly provider: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUserConnectionProvider>>>;
  readonly confirmed: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUserConnectionConfirmed>>>;
  readonly blocked: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUserConnectionBlocked>>>;
  readonly role: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUserConnectionRole>>>;
  readonly created_by: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUserConnectionCreated_by>>>;
  readonly updated_by: Maybe<ReadonlyArray<Maybe<STRAPI_UsersPermissionsUserConnectionUpdated_by>>>;
};

type StrapiCategories = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly strapiId: Maybe<Scalars['String']>;
};


type StrapiCategories_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StrapiCategories_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type StrapiCategoriesConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StrapiCategoriesEdge>;
  readonly nodes: ReadonlyArray<StrapiCategories>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<StrapiCategoriesGroupConnection>;
};


type StrapiCategoriesConnection_distinctArgs = {
  field: StrapiCategoriesFieldsEnum;
};


type StrapiCategoriesConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: StrapiCategoriesFieldsEnum;
};

type StrapiCategoriesEdge = {
  readonly next: Maybe<StrapiCategories>;
  readonly node: StrapiCategories;
  readonly previous: Maybe<StrapiCategories>;
};

enum StrapiCategoriesFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  name = 'name',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  slug = 'slug',
  strapiId = 'strapiId'
}

type StrapiCategoriesFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly strapiId: Maybe<StringQueryOperatorInput>;
};

type StrapiCategoriesGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StrapiCategoriesEdge>;
  readonly nodes: ReadonlyArray<StrapiCategories>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type StrapiCategoriesSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<StrapiCategoriesFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type StrapiPosts = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly published: Maybe<Scalars['Boolean']>;
  readonly category: Maybe<Scalars['String']>;
  readonly featured: Maybe<Scalars['Boolean']>;
  readonly title: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly description: Maybe<Scalars['String']>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly image_url: Maybe<Scalars['String']>;
  readonly content: Maybe<ReadonlyArray<Maybe<StrapiPostsContent>>>;
  readonly updated_by: Maybe<StrapiPostsUpdated_by>;
  readonly strapiId: Maybe<Scalars['String']>;
};


type StrapiPosts_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StrapiPosts_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StrapiPosts_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type StrapiPostsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StrapiPostsEdge>;
  readonly nodes: ReadonlyArray<StrapiPosts>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<StrapiPostsGroupConnection>;
};


type StrapiPostsConnection_distinctArgs = {
  field: StrapiPostsFieldsEnum;
};


type StrapiPostsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: StrapiPostsFieldsEnum;
};

type StrapiPostsContent = {
  readonly rich_text: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly id: Maybe<Scalars['String']>;
};


type StrapiPostsContent_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StrapiPostsContent_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type StrapiPostsContentFilterInput = {
  readonly rich_text: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type StrapiPostsContentFilterListInput = {
  readonly elemMatch: Maybe<StrapiPostsContentFilterInput>;
};

type StrapiPostsEdge = {
  readonly next: Maybe<StrapiPosts>;
  readonly node: StrapiPosts;
  readonly previous: Maybe<StrapiPosts>;
};

enum StrapiPostsFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  published = 'published',
  category = 'category',
  featured = 'featured',
  title = 'title',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  date = 'date',
  description = 'description',
  excerpt = 'excerpt',
  slug = 'slug',
  image_url = 'image_url',
  content = 'content',
  content___rich_text = 'content.rich_text',
  content___createdAt = 'content.createdAt',
  content___updatedAt = 'content.updatedAt',
  content___id = 'content.id',
  updated_by___username = 'updated_by.username',
  updated_by___createdAt = 'updated_by.createdAt',
  updated_by___updatedAt = 'updated_by.updatedAt',
  updated_by___id = 'updated_by.id',
  strapiId = 'strapiId'
}

type StrapiPostsFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly published: Maybe<BooleanQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
  readonly featured: Maybe<BooleanQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly image_url: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<StrapiPostsContentFilterListInput>;
  readonly updated_by: Maybe<StrapiPostsUpdated_byFilterInput>;
  readonly strapiId: Maybe<StringQueryOperatorInput>;
};

type StrapiPostsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StrapiPostsEdge>;
  readonly nodes: ReadonlyArray<StrapiPosts>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type StrapiPostsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<StrapiPostsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type StrapiPostsUpdated_by = {
  readonly username: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly id: Maybe<Scalars['String']>;
};


type StrapiPostsUpdated_by_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StrapiPostsUpdated_by_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type StrapiPostsUpdated_byFilterInput = {
  readonly username: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type ProjectTemplateQueryQueryVariables = {
  slug: Scalars['String'];
};


type ProjectTemplateQueryQuery = { readonly post: Maybe<(
    Pick<StrapiPosts, 'id' | 'title' | 'slug' | 'category' | 'published' | 'image_url' | 'excerpt' | 'description' | 'strapiId' | 'createdAt'>
    & { readonly content: Maybe<ReadonlyArray<Maybe<Pick<StrapiPostsContent, 'rich_text'>>>> }
  )> };

type PostFieldsFragment = Pick<StrapiPosts, 'category' | 'image_url' | 'slug' | 'published' | 'strapiId' | 'excerpt' | 'createdAt' | 'updatedAt' | 'title' | 'featured'>;

type StrapiCategoriesFragment = { readonly node: Pick<StrapiCategories, 'name' | 'slug'> };

type blogPageQueryQueryVariables = {};


type blogPageQueryQuery = { readonly blog: { readonly edges: ReadonlyArray<{ readonly node: PostFieldsFragment }> }, readonly categories: { readonly edges: ReadonlyArray<StrapiCategoriesFragment> } };

type IndexPageQueryQueryVariables = {};


type IndexPageQueryQuery = { readonly featured: { readonly edges: ReadonlyArray<{ readonly node: PostFieldsFragment }> }, readonly poetry: { readonly edges: ReadonlyArray<{ readonly node: PostFieldsFragment }> }, readonly blog: { readonly edges: ReadonlyArray<{ readonly node: PostFieldsFragment }> }, readonly categories: { readonly edges: ReadonlyArray<StrapiCategoriesFragment> } };

type poetryPageQueryQueryVariables = {};


type poetryPageQueryQuery = { readonly poetry: { readonly edges: ReadonlyArray<{ readonly node: PostFieldsFragment }> }, readonly categories: { readonly edges: ReadonlyArray<StrapiCategoriesFragment> } };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type PagesQueryQueryVariables = {};


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

}