import { SectionTitle } from '@components/Typography';
import React from 'react';
import { AdvantageCard } from '@components/sections/OurAdvantages/components';
import * as styles from './our-advantages.module.scss';

export interface IOurAdvantagesProps {
  primary?: any;
  fields?: any[];
}

const OurAdvantages: React.FC<IOurAdvantagesProps> = ({ primary, fields }) => (
  <section id={primary.section_id} className={styles.ourAdvantages}>
    <SectionTitle title={primary.section_title} />
    <div className="row">
      {fields &&
        fields.map((field, index) => (
          <AdvantageCard
            key={index}
            title={field.block_title}
            description={field.block_description}
            image={field.icon_link}
          />
        ))}
    </div>
  </section>
);

export default OurAdvantages;
