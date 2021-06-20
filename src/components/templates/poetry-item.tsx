import React from 'react';

import ProjectsLayout from '../layouts/PoetryLayout';

import DetailItemComponent from 'components/shared/DetailItem';

const DetailItem: React.FC = ({ data }: any) => {
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

export default DetailItem;
