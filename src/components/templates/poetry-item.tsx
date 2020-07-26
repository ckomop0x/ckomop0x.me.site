import { DetailItem as DetailItemComponent } from '@components/blocks';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { ProjectsLayout } from '../containers';

export const query = graphql`
  query ProjectTemplateQuery($slug: String!) {
    post: strapiPosts(slug: { eq: $slug }) {
      id
      title
      slug
      category
      published
      image_url
      excerpt
      description
      strapiId
      createdAt
      content {
        rich_text
      }
    }
  }
`;

const DetailItem = (props: any) => {
  if (!props.data) {
    return null;
  }
  const { data, errors } = props;
  const itemData = data && data.post;

  if (!itemData) return null;

  const socialImage = `${itemData?.image_url}?tr=w-1080,h-280,fo-top`;

  return (
    <ProjectsLayout
      headTitle={itemData.title}
      ogUrl={`https://ckomop0x.me/${itemData.category}/${itemData.slug}/`}
      ogImage={socialImage}
      ogDescription={itemData.title}
      twitterCard={itemData.title}
    >
      <DetailItemComponent
        title={itemData.title}
        date={itemData.createdAt}
        image={itemData.image_url}
        content={itemData.content}
      />
    </ProjectsLayout>
  );
};

export default DetailItem;
