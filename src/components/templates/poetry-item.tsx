import { graphql } from 'gatsby';
import React from 'react';

import ProjectsLayout from '../layouts/PoetryLayout';

import DetailItemComponent from 'components/shared/DetailItem';
import { ProjectTemplateQuery } from 'components/templates/__generated__/ProjectTemplateQuery';

interface IDetailItem {
  data: ProjectTemplateQuery;
}

const DetailItem: React.FC<IDetailItem> = ({ data }) => {
  if (!data || !data?.poetry) {
    return null;
  }

  const {
    content = [],
    createdAt,
    image_url,
    slug,
    title,
    updatedAt,
  } = data.poetry;

  const socialImage = `${image_url}?tr=w-1080,h-280,fo-top`;
  return (
    <ProjectsLayout
      headTitle={title}
      ogUrl={`https://ckomop0x.me/poetry/${slug}/`}
      ogImage={socialImage}
      ogDescription={title}
      twitterCard={title}
    >
      <DetailItemComponent
        title={title}
        createdAt={createdAt}
        updatedAt={updatedAt}
        description={(content?.[0]?.rich_text as string) || ''}
        image={image_url}
      />
    </ProjectsLayout>
  );
};

export const query = graphql`
  query ProjectTemplateQuery($slug: String!) {
    poetry: strapiPosts(slug: { eq: $slug }) {
      id
      title
      slug
      published
      image_url
      excerpt
      content {
        rich_text
      }
      strapiId
      createdAt
      updatedAt
    }
  }
`;

export default DetailItem;
