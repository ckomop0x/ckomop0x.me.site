import { graphql } from 'gatsby';
import React from 'react';

import MainContent from '@components/MainContent';
import { Hero } from '@components/sections';
import Portfolio from '@components/Portfolio';
import Helmet from 'react-helmet';

import { MainPageLayout } from '../containers';
import { TitleBlock } from '@styles/TitleBlock';
import ItemsList from '@components/ItemsList';

// export const query = graphql`
//   query IndexPageQuery {
//     prismic {
//       mainContent: allIndex_pages {
//         edges {
//           node {
//             headline
//             description
//             image
//             _linkType
//             _meta {
//               alternateLanguages {
//                 lang
//               }
//             }
//             body {
//               ... on PRISMIC_Index_pageBodyText {
//                 type
//                 primary {
//                   text
//                 }
//               }
//               ... on PRISMIC_Index_pageBodyAdvantages_gallery {
//                 type
//                 __typename
//                 primary {
//                   section_id
//                   section_title
//                   section_description
//                   section_image {
//                     ... on PRISMIC__ImageLink {
//                       height
//                       _linkType
//                       name
//                       size
//                       url
//                       width
//                     }
//                   }
//                 }
//                 fields {
//                   block_title
//                   icon_link {
//                     ... on PRISMIC__ImageLink {
//                       __typename
//                       url
//                       name
//                     }
//                   }
//                   block_description
//                 }
//               }
//               ... on PRISMIC_Index_pageBodyQuote {
//                 type
//                 label
//                 primary {
//                   quote
//                   name_of_the_author
//                 }
//               }
//             }
//           }
//         }
//       }
//       items: allPortfolio_items(sortBy: project_date_DESC, first: 4) {
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

export default (props: any) => {
  // const { data, errors } = props;
  // const { items, mainContent } = data && data.prismic;
  // const projects = items.edges;
  // const content = mainContent?.edges[0]?.node?.body;


  return (
    <MainPageLayout>
      <Hero
        title="Оптимальные веб-решения для вашего бизнеса"
        subtitle="Каждый проект требует своего индивидуального подхода."
      />
      <div className="container">
        <TitleBlock>Последние публикации</TitleBlock>
        <ItemsList queryName="blog" amount={4} category="news" />
        <TitleBlock>Последние стихи</TitleBlock>
        <ItemsList queryName="stihi" amount={4} category="poetry" />
      </div>
      {/*<MainContent content={content} />*/}
      {/*{errors && <div>Ошибка загрузки</div>}*/}
      {/*{projects && <Portfolio projects={projects} />}*/}
    </MainPageLayout>
  );
};
