import { FC } from 'react';

import { Title, SubTitle, HeroSectionText } from './styles';

import { HeroSectionWrapper } from '@/components/sections/HeroSection/HeroSectionWrapper';
import Nav from 'components/ui/Nav';

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
    <HeroSectionText>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </HeroSectionText>
  </HeroSectionWrapper>
);

export default HeroSection;
