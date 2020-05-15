import {
  ProjectDates,
  ProjectTerms,
  ProjectUrl,
} from '@components/PoetryItem/components';
import DetailsLine from '@components/PoetryItem/components/DetailsLine';
import { SectionTitle } from '@components/Typography';
import React, { Fragment } from 'react';
import parse from 'html-react-parser';
import * as styles from './project.module.scss';
import { Content, Title } from '@components/PoetryItem/styles';

export interface IProjectProps {
  title: string;
  poetryDate?: Date | undefined;
  services?: string[];
  poetryItem: any;
}

const PoetryItem: React.FC<any> = (props) => {
  const { poetryItem } = props;

  // const projectDates = new Intl.DateTimeFormat('ru-RU', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // }).format(poetryItem.date);

  return (
    <div>
      <Title>
        <div className="container">
          <div className="row">
            <SectionTitle title={poetryItem.title} className="col-12" />
          </div>
        </div>
      </Title>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-8">
            <Fragment>
              <Content >{parse(`<p>${poetryItem.description.split('\n').join('</br>')}</p>`)}</Content>
              {/*<div className={styles.projectImage}>*/}
              {/*  <img*/}
              {/*    src={poetryItem.image_url}*/}
              {/*    alt={poetryItem.title}*/}
              {/*    style={{ width: '100%' }}*/}
              {/*  />*/}
              {/*  <p>{poetryItem.title}</p>*/}
              {/*</div>*/}
            </Fragment>
          </div>
          <div className="col-xs-12 col-lg-4">
            <h2 className={[styles.detailsTitle].join(' ')}>О стихитворении</h2>

            {poetryItem.written && <DetailsLine text={`${poetryItem.written} (${poetryItem.date})`} title="Когда написано" />}

            {/*{services && services[0] && (*/}
            {/*  <DetailsLine text={services.join(', ')} title="Сервисы" />*/}
            {/*)}*/}

            {/*{cms && <DetailsLine text={cms} title="CMS"/>}*/}

            {/*<h2 className={[styles.detailsTitle].join(' ')}>Команда проекта</h2>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoetryItem;
