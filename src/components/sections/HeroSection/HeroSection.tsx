import { FC } from 'react';

import { HeroSectionWrapper, Title, SubTitle, HeroSectionText } from './styles';

import Nav from 'components/UI/Nav';

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const HeroSection: FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => (
  <HeroSectionWrapper backgroundImage={backgroundImage}>
    <Nav />
    <HeroSectionText className="container">
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </HeroSectionText>
  </HeroSectionWrapper>
);

export default HeroSection;
