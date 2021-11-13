interface IGetItemPathProps {
  slug: string | null;
}

export interface IGetItemPath {
  params: {
    slug: string;
  };
}

export default function getItemPath(item: IGetItemPathProps): IGetItemPath {
  return {
    params: {
      slug: `${item.slug}`,
    },
  };
}
