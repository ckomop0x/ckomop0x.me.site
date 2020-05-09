import PortfolioItems from '@components/PortfolioItems';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import PoetryLayout from '../containers/PoetryLayout/PoetryLayout';

export const query = graphql`
  query PortfolioPageQuery {
    poetryItems: allStrapiPosts {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

export interface IPortfolioProps {
  data: any;
}

const PoetryPage: React.FC<IPortfolioProps> = (props) => {
  if (!props.data) {
    return null;
  }

  const { data } = props;
  const poetryItems = data && data.poetryItems.edges;

  return (
    <PoetryLayout
      headTitle="Webtime.Studio | Портфолио работ"
      ogUrl="https://webtime.studio/portfolio/"
      ogDescription="Webtime.Studio | Портфолио работ"
      twitterCard="Портфолио работ работ проделанных компанией Webtime.Studio"
    >
      <div className="container">
        {poetryItems && <PortfolioItems projects={poetryItems} />}
      </div>
    </PoetryLayout>
  );
};

export default PoetryPage;
