import React from 'react';

import { SectionTitleStyled } from './styles';

export interface ISectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className }: ISectionTitleProps) {
  return <SectionTitleStyled className={className}>{title}</SectionTitleStyled>;
}
