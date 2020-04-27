import { Link } from 'gatsby';
import React from 'react';

import Nav from '@components/Nav';

import * as styles from './hero.module.scss';

export interface IMainSectionProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<IMainSectionProps> = ({ title, subtitle }) => {
  return (
    <section className={styles.mainSection}>
      <Nav title="Webtime.Studio" />
      <div className={['container', styles.mainSectionText].join(' ')}>
        <p className={styles.subTitle}>{subtitle}</p>
        <h1 className={styles.title}>{title}</h1>
        <Link className={styles.startButton} to="/portfolio">
          Смотреть портфолио →
        </Link>
      </div>
    </section>
  );
};

export default Hero;
