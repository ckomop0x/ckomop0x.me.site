export interface CategoryInfo {
  title: string;
  slug: string;
}

export interface PostInterface {
  id: string | null | undefined;
  excerpt: string | null;
  publicationDate: string;
  title: string;
  slug: string | null;
  category?: CategoryInfo | null;
  image: string;
  updateDate?: string;
}
