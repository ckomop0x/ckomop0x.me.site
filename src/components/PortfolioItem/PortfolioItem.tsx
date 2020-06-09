import { getSrcSet } from '@utils/image';
import { Link } from 'gatsby';
// import { RichText } from 'prismic-reactjs';
import React from 'react';
// import { formatPostDate } from '@utils/date';
// import { linkResolver } from '@utils/prismic';

import * as styles from './portfolio-item.module.scss';

const PortfolioItem: React.FC<any> = (props: any) => {
  const {
    title,
    slug,
    // project_date,
    // _meta,
    // excerpt,
    // project_image,
    // services: projectServices,
  } = props;

  // let services: any[] = [];
  // const postDate = formatPostDate(project_date);
  const articleLink = slug;
  // const imageSrc = project_image?.url;
  // const articleTitle =
  //   RichText.asText(title).length !== 0 && RichText.asText(title);
  //
  // if (projectServices && projectServices[0]) {
  //   projectServices.forEach((projectService: any) =>
  //     services.push(projectService.serviceTag.service[0].text)
  //   );
  // }

  return (
    <article className={['col-12', styles.portfolioItem].join(' ')}>
      <Link to={articleLink} className={styles.link}>
        {/*{imageSrc && (*/}
        {/*  <img*/}
        {/*    src={`${imageSrc}?tr=w-1080,h-280,fo-top`}*/}
        {/*    srcSet={getSrcSet(imageSrc)}*/}
        {/*    alt={articleTitle}*/}
        {/*    style={{ maxWidth: '100%' }}*/}
        {/*  />*/}
        {/*)}*/}
        {/*<div className={styles.itemContent}>*/}
        {/*  <div className="text-left p-relative z-index-2 mb-3">*/}
        {/*    /!*<p className={styles.date}>*!/*/}
        {/*    /!*  <time>{postDate}</time>*!/*/}
        {/*    /!*</p>*!/*/}
        {/*    <h4*/}
        {/*      className={[*/}
        {/*        'custom-text-9 font-weight-bolder text-decoration-none mb-2',*/}
        {/*        styles.title,*/}
        {/*      ].join(' ')}*/}
        {/*    >*/}
        {/*      {articleTitle}*/}
        {/*    </h4>*/}
        {/*    {services && services[0] && (*/}
        {/*      <p className="text-uppercase custom-text-4 text-color-quaternary text-decoration-none mb-3">*/}
        {/*        {services.join(', ')}*/}
        {/*      </p>*/}
        {/*    )}*/}
        {/*    <span className="custom-text-4 font-weight-semibold m-0 p-0 text-color-light custom-btn-with-arrow custom-btn-with-arrow-primary text-decoration-none">*/}
        {/*      Посмотреть*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </Link>
    </article>
  );
};

export default PortfolioItem;
