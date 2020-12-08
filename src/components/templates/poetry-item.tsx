import { graphql } from 'gatsby';
import React from 'react';

import ProjectsLayout from '../layouts/PoetryLayout';

import { default as DetailItemComponent } from 'components/shared/DetailItem';

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
    }
  }
`;

const DetailItem = (props: any) => {
  if (!props.data) {
    return null;
  }
  const { data } = props;
  const itemData = data && data.poetry;

  if (!itemData) return null;

  const socialImage = `${itemData?.image_url}?tr=w-1080,h-280,fo-top`;
  return (
    <ProjectsLayout
      headTitle={itemData.title}
      ogUrl={`https://ckomop0x.me/poetry/${itemData.slug}/`}
      ogImage={socialImage}
      ogDescription={itemData.title}
      twitterCard={itemData.title}
    >
      <DetailItemComponent
        title={itemData.title}
        date={itemData.createdAt}
        description={itemData.content[0].rich_text}
        image={itemData.image_url}
      />
    </ProjectsLayout>
  );
};

export default DetailItem;
