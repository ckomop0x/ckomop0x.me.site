import React from 'react';

import Nav from '@components/Nav';

import { MainSection, Title, SubTitle } from './styles';

export interface IMainSectionProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<IMainSectionProps> = ({ title, subtitle }) => {
  return (
    <MainSection>
      <Nav title="Ckomop0x.me" />
      <div className="container main-section__text">
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        {/* <Link className={styles.startButton} to="/poetry">
          Читать стихи →
        </Link> */}{' '}
      </div>
    </MainSection>
  );
};

export default Hero;
