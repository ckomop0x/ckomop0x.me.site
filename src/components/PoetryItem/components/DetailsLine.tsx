import * as styles from '@components/PoetryItem/project.module.scss';
import React from 'react';

export interface IDetailsLineProps {
  title?: string;
  text?: string;
  url?: string;
}

const DetailsLine: React.FC<IDetailsLineProps> = ({ text, title, url }) => {
  return (
    <div className={styles.detailsLine}>
      <b className={styles.detailsLineTitle}>{url ? 'Перейти' : title}:</b>{' '}
      {url ? (
        <a
          className={[styles.detailsLineText, styles.detailsLineLink].join(' ')}
          title={title}
          rel="nofollow noopener noreferrer"
          href={url}
          target="_blank"
        >
          сайт
        </a>
      ) : (
        <span className={styles.detailsLineText}>{text}</span>
      )}
    </div>
  );
};

export default DetailsLine;
