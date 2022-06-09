export interface IGetItemPathProps {
  attributes: {
    slug: string | null;
  };
}

export interface IItemPath {
  params: {
    slug: string;
  };
}

export default function getItemPath(
  item: IGetItemPathProps,
): IItemPath | string {
  if (!item.attributes.slug) {
    return 'Wrong item format, should be item.slug:string';
  }

  return {
    params: {
      slug: `${item.attributes.slug}`,
    },
  };
}
