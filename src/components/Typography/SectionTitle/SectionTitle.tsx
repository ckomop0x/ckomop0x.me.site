import React from 'react';
import * as styles from './section-title.module.scss';
import { SectionTitleStyled } from './styles';

export interface ISectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<ISectionTitleProps> = ({ title, className }) => {
  return <SectionTitleStyled className={className}>{title}</SectionTitleStyled>;
};

export default SectionTitle;
