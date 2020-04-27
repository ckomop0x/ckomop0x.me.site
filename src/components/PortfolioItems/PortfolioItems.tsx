import React from 'react';

import PortfolioItem from '@components/PortfolioItem';
import * as styles from './portfolio-items.module.scss';

const PortfolioItems: React.FC<any> = ({ projects }) => (
  <div className={['container', styles.portfolioItems].join(' ')}>
    {projects &&
      projects.map((portfolioItem: any) => (
        <PortfolioItem
          key={portfolioItem.node._meta.id}
          {...portfolioItem.node}
        />
      ))}
  </div>
);

export default PortfolioItems;
