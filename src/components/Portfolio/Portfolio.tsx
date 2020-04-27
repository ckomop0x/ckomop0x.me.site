import PortfolioItems from '@components/PortfolioItems';
import { SectionTitle } from '@components/Typography';
import { Link } from 'gatsby';
import React from 'react';

import * as styles from './portfolio.module.scss';

export interface IPortfolio {
  projects: any[];
}

const Portfolio: React.FC<IPortfolio> = ({ projects }) => (
  <section>
    <div className={['home-header container'].join(' ')}>
      <SectionTitle
        className={styles.portfolioHeader}
        title="Интернет-проекты, модули и веб-приложения."
      />
    </div>
    <div>
      <PortfolioItems projects={projects} />
      <div className="text-center">
        <Link to="/portfolio" className={styles.link}>
          Посмотреть все работы
        </Link>
      </div>
    </div>
  </section>
);

export default Portfolio;
