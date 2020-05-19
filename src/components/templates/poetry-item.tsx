import PoetryItem from '@components/PoetryItem';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { ProjectsLayout } from '../containers';

export const query = graphql`
  query ProjectTemplateQuery($slug: String!) {
    poetry: strapiPosts(slug: { eq: $slug }) {
      id
      title
      slug
      published
      image_url
      excerpt
      description
      date(locale: "ru", formatString: "DD/MM/YYYY")
      written: date(locale: "ru", fromNow: true)
      strapiId
    }
  }
`;

const ProjectTemplate = (props: any) => {
  if (!props.data) {
    return null;
  }
  const { data, errors } = props;
  const poetryItem = data && data.poetry;

  if (!poetryItem) return null;

  let services: any[] = [];

  // const date = poetryItem?.poetry_date;
  // const slug = poetryItem?._meta?.uid;
  // const title = poetryItem?.title;
  const socialImage = `${poetryItem?.poetry_image?.url}?tr=w-1080,h-280,fo-top`;
  // const projectServices = poetryItem?.services;

  // if (projectServices && projectServices[0]) {
  //   projectServices.forEach((projectService: any) =>
  //     services.push(projectService.serviceTag.service[0].text)
  //   );
  // }
  return (
    <ProjectsLayout
      headTitle={poetryItem.title}
      ogUrl={`https://ckomop0x.me/poetry/${poetryItem.slug}/`}
      ogImage={socialImage}
      ogDescription={poetryItem.title}
      twitterCard={poetryItem.title}
    >
      <PoetryItem
        title={poetryItem.title}
        poetryDate={poetryItem.date}
        poetryItem={poetryItem}
        // services={services}
      />
    </ProjectsLayout>
  );
};

export default ProjectTemplate;
