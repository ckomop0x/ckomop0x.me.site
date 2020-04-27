import React from 'react';
import * as styles from './section-title.module.scss';

export interface ISectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<ISectionTitleProps> = ({ title, className }) => {
  return <h2 className={[className, styles.sectionTitle].join(' ')}>{title}</h2>;
};

export default SectionTitle;
