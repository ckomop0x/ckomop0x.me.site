import React from 'react';
import { RichText } from 'prismic-reactjs';
import { useStaticQuery, graphql } from 'gatsby';
import AdvantagesGallery from '@components/AdvantagesGallery';
import { linkResolver, htmlSerializer } from '@utils/prismic';

import * as styles from './main-content.module.scss';

export interface IMainContent {
  content: any;
}

const MainContent: React.FC<IMainContent> = ({ content }) => {

  return (
    <div className={['container', styles.mainContent].join(' ')}>
      {content.map((contentItem: any, index: number) => {
        if (contentItem.type === 'text') {
          return (
            <h2 key={index}>
              {contentItem.primary.text &&
                RichText.asText(
                  contentItem.primary.text,
                  linkResolver,
                  htmlSerializer
                )}
            </h2>
          );
        } else if (contentItem.type === 'advantages_gallery') {
          return <AdvantagesGallery key={index} {...contentItem} />;
        }
      })}
    </div>
  );
};

export default MainContent;
