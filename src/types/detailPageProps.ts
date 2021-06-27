export interface IDetailPageProps {
  detailedPost: {
    image_url: string;
    slug: string;
    title: string;
    updatedAt: Date;
    createdAt: Date;
    content?: {
      rich_text: string;
    }[];
  };
}
