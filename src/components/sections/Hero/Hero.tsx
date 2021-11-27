import { MainSection, Title, SubTitle } from './styles';

import Nav from 'components/shared/Nav';

export interface IHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
}: IHeroSectionProps): JSX.Element {
  return (
    <MainSection backgroundImage={backgroundImage}>
      <Nav />
      <div className="container main-section__text">
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </div>
    </MainSection>
  );
}
