import { SectionTitle } from '@components/Typography';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import { linkResolver, htmlSerializer } from '@utils/prismic';
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
    <section id={primary.section_id ? RichText.asText(primary.section_id) : ''}>
      {primary && primary.section_title && <SectionTitle
        title={RichText.asText(
          primary.section_title,
          linkResolver,
          htmlSerializer
        )}
      />}
      {primary?.section_description && (
        <div className={styles.sectionDescription}>
          {RichText.render(
            primary.section_description,
            linkResolver,
            htmlSerializer
          )}
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
                {field.block_title && (
                  <h3>
                    {RichText.asText(
                      field.block_title,
                      linkResolver,
                      htmlSerializer
                    )}
                  </h3>
                )}
                <div className={styles.blockDescription}>
                  {field.icon_link && (
                    <img
                      src={'url' in field.icon_link ? field.icon_link.url : ''}
                      alt={field.block_title || ''}
                    />
                  )}
                  {field.block_description && (
                    <p>
                      {RichText.asText(
                        field.block_description,
                        linkResolver,
                        htmlSerializer
                      )}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default AdvantagesGallery;
