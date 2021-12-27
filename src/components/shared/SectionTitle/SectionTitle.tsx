import React from 'react';

import { SectionTitleStyled } from './styles';

export interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle = ({ title, className }: SectionTitleProps) => (
  <SectionTitleStyled className={className}>{title}</SectionTitleStyled>
);

export default SectionTitle;
