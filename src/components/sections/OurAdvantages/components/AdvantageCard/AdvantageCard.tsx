import React from 'react';
import * as styles from './advantage-card.module.scss';

export interface IAdvantageCardProps {
  title: string;
  description: string;
  image?: {
    url?: string;
    name?: string;
  };
}

const AdvantageCard: React.FC<IAdvantageCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className={['col-12', 'col-lg-4', styles.card].join(' ')}>
      {image && (
        <img
          src={image?.url}
          alt={image?.name || title}
          className={styles.image}
        />
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default AdvantageCard;
