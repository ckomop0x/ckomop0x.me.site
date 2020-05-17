import { SectionTitle } from '@components/Typography';
import React from 'react';
import { OurAdvantages } from '../sections';

import * as styles from './advantages-gallery.module.scss';

export interface IAdvantagesGalleryProps {
  primary?: any;
  fields?: any[];
}

const AdvantagesGallery: React.FC<IAdvantagesGalleryProps> = ({
  primary,
  fields,
}) => {
  if (!primary) {
    return <div>Заголовок секции не указан</div>;
  }

  if (
    primary.section_id &&
    primary.section_id[0]['text'] === 'our-advantages'
  ) {
    return <OurAdvantages primary={primary} fields={fields} />;
  }

  return (
    <section id={primary.section_id ?? ''}>
      {primary && primary.section_title && (
        <SectionTitle title={primary.section_title} />
      )}
      {primary?.section_description && (
        <div className={styles.sectionDescription}>
          {primary.section_description}
        </div>
      )}
      <div className="row">
        {fields &&
          fields.map((field, index: number) => {
            return (
              <div
                key={index}
                className={fields?.length === 3 ? 'col-4' : 'col-6'}
              >
                {field.block_title && <h3>{field.block_title}</h3>}
                <div className={styles.blockDescription}>
                  {field.icon_link && (
                    <img
                      src={'url' in field.icon_link ? field.icon_link.url : ''}
                      alt={field.block_title || ''}
                    />
                  )}
                  {field.block_description && <p>{field.block_description}</p>}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default AdvantagesGallery;
