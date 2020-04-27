import { SectionTitle } from '@components/Typography';
import React from 'react';
import { AdvantageCard } from '@components/sections/OurAdvantages/components';
import { RichText } from 'prismic-reactjs';
import * as styles from './our-advantages.module.scss';

export interface IOurAdvantagesProps {
  primary?: any;
  fields?: any[];
}

const OurAdvantages: React.FC<IOurAdvantagesProps> = ({ primary, fields }) => (
  <section
    id={RichText.asText(primary.section_id)}
    className={styles.ourAdvantages}
  >
    <SectionTitle title={RichText.asText(primary.section_title)} />
    <div className="row">
      {fields &&
        fields.map((field, index) => (
          <AdvantageCard
            key={index}
            title={RichText.asText(field.block_title)}
            description={RichText.asText(field.block_description)}
            image={field.icon_link}
          />
        ))}
    </div>
  </section>
);

export default OurAdvantages;
