import { HeroSectionWrapper, Title, SubTitle, HeroSectionText } from './styles';

import Nav from 'components/shared/Nav';

export interface IHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
}: IHeroSectionProps): JSX.Element {
  return (
    <HeroSectionWrapper backgroundImage={backgroundImage}>
      <Nav />
      <HeroSectionText className="container">
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </HeroSectionText>
    </HeroSectionWrapper>
  );
}
