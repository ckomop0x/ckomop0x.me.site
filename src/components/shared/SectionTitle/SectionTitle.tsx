import React from 'react';

import { SectionTitleStyled } from './styles';

export interface ISectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<ISectionTitleProps> = ({ title, className }) => (
  <SectionTitleStyled className={className}>{title}</SectionTitleStyled>
);

export default SectionTitle;
