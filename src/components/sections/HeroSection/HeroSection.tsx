import { HeroSectionWrapper, Title, SubTitle, HeroSectionText } from './styles';

import Nav from 'components/UI/Nav';

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
}: HeroSectionProps): JSX.Element => (
  <HeroSectionWrapper backgroundImage={backgroundImage}>
    <Nav />
    <HeroSectionText className="container">
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </HeroSectionText>
  </HeroSectionWrapper>
);

export default HeroSection;
