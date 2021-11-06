export interface IDetailPageProps {
  detailedPost: {
    image_url: string;
    slug: string;
    title: string;
    updated_at: Date;
    created_at: Date;
    content?: {
      rich_text: string;
    }[];
  };
}
