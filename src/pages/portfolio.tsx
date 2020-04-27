import PortfolioItems from '@components/PortfolioItems';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import PoetryLayout from '../containers/PoetryLayout/PoetryLayout';

// export const query = graphql`
//   query PortfolioPageQuery {
//     prismic {
//       items: allPortfolio_items(sortBy: project_date_DESC, first: 100) {
//         edges {
//           node {
//             _meta {
//               id
//               uid
//               type
//             }
//             title
//             project_date
//             excerpt
//             project_image {
//               ... on PRISMIC__ExternalLink {
//                 url
//               }
//             }
//             services {
//               serviceTag {
//                 ... on PRISMIC_Services {
//                   service
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export interface IPortfolioProps {
  data: any;
}

const PortfolioPage: React.FC<IPortfolioProps> = (props) => {
  if (!props.data) {
    return null;
  }

  const { data } = props;
  const projects = data && data.prismic.items.edges;

  return (
    <PoetryLayout
      headTitle="Webtime.Studio | Портфолио работ"
      ogUrl="https://webtime.studio/portfolio/"
      ogDescription="Webtime.Studio | Портфолио работ"
      twitterCard="Портфолио работ работ проделанных компанией Webtime.Studio"
    >
      <div className="container">
        {projects && <PortfolioItems projects={projects} />}
      </div>
    </PoetryLayout>
  );
};

export default PortfolioPage;
