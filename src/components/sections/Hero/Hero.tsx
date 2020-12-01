import React from 'react';

import { MainSection, Title, SubTitle } from './styles';

import Nav from 'components/shared/Nav';

export interface IMainSectionProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<IMainSectionProps> = ({ title, subtitle }) => (
  <MainSection>
    <Nav />
    <div className="container main-section__text">
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      {/* <Link className={styles.startButton} to="/poetry">
          Читать стихи →
        </Link> */}{' '}
    </div>
  </MainSection>
);

export default Hero;
