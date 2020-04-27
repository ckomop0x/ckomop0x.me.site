// import { graphql } from 'gatsby';
//
// export const MAIN_PAGE_QUERY_PRISMIC = graphql`
//   query MAIN_PAGE_QUERY_PRISMIC {
//     prismic {
//       #      allBlog_homes(uid: null) {
//       #        edges {
//       #          node {
//       #            _meta {
//       #              id
//       #              type
//       #            }
//       #            headline
//       #            description
//       #            image
//       #          }
//       #        }
//       #      }
//       allPortfolio_items(sortBy: project_date_DESC) {
//         edges {
//           node {
//             _meta {
//               id
//               uid
//               type
//             }
//             title
//             #            date
//             #            body {
//             #              ... on PRISMIC_PostBodyText {
//             #                type
//             #                label
//             #                primary {
//             #                  text
//             #                }
//             #              }
//             #            }
//           }
//         }
//       }
//     }
//   }
// `;
