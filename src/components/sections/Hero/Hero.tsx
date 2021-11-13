import React from 'react';

import { MainSection, Title, SubTitle } from './styles';

import Nav from 'components/shared/Nav';

export interface IHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const Hero: React.FC<IHeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
}): JSX.Element => (
  <MainSection backgroundImage={backgroundImage}>
    <Nav />
    <div className="container main-section__text">
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </div>
  </MainSection>
);

export default Hero;
