export interface PostInterface {
  id: string | null;
  excerpt: string | null;
  publicationDate: string;
  title: string;
  slug: string | null;
  category?: {
    title: string;
    slug: string;
  } | null;
  image: string;
  updateDate?: string;
}
