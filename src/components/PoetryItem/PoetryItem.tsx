import {
  ProjectDates,
  ProjectTerms,
  ProjectUrl,
} from '@components/PoetryItem/components';
import DetailsLine from '@components/PoetryItem/components/DetailsLine';
import { SectionTitle } from '@components/Typography';
import { Date, RichText } from 'prismic-reactjs';
import React, { Fragment } from 'react';
import * as styles from './project.module.scss';
import { Content, Title } from '@components/PoetryItem/styles';

export interface IProjectProps {
  title: string;
  poetryDate?: Date | undefined;
  services?: string[];
  poetryItem: any;
}

const PoetryItem: React.FC<IProjectProps> = ({
  title,
  poetryDate,
  services,
  poetryItem,
}) => {
  const projectDates = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(Date(poetryDate));

  return (
    <div>
      <Title>
        <div className="container">
          <div className="row">
            <SectionTitle title={title} className="col-12" />
          </div>
        </div>
      </Title>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-8">
            {poetryItem.body.map((contentBlock: any, index: number) => {
              return (
                <Fragment key={index}>
                  {contentBlock.type === 'text' && (
                    <Content>
                      {RichText.render(contentBlock.primary.description_text)}
                    </Content>
                  )}
                  {/*{contentBlock.type === 'external_image' && (*/}
                  {/*  <div className={styles.projectImage}>*/}
                  {/*    <img*/}
                  {/*      src={contentBlock.primary.image_link.url}*/}
                  {/*      alt={RichText.asText(contentBlock.primary.image_alt)}*/}
                  {/*      style={{ width: '100%' }}*/}
                  {/*    />*/}
                  {/*    <p>{RichText.asText(contentBlock.primary.image_alt)}</p>*/}
                  {/*  </div>*/}
                  {/*)}*/}
                </Fragment>
              );
            })}
          </div>
          <div className="col-xs-12 col-lg-4">
            <h2 className={[styles.detailsTitle].join(' ')}>О стихитворении</h2>

            {projectDates && <DetailsLine text={projectDates} title="Когда написано" />}

            {services && services[0] && (
              <DetailsLine text={services.join(', ')} title="Сервисы" />
            )}

            {/*{cms && <DetailsLine text={cms} title="CMS"/>}*/}

            <h2 className={[styles.detailsTitle].join(' ')}>Команда проекта</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoetryItem;
