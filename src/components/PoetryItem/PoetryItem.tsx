import {
  ProjectDates,
  ProjectTerms,
  ProjectUrl,
} from '@components/PoetryItem/components';
import DetailsLine from '@components/PoetryItem/components/DetailsLine';
import { SectionTitle } from '@components/Typography';
import React, { Fragment } from 'react';
import parse from 'html-react-parser';
import { Content, Title } from './styles';
import { TitleBlock } from '@styles/Typography';
import styled from 'styled-components';

export interface IProjectProps {
  title: string;
  poetryDate?: Date | undefined;
  services?: string[];
  poetryItem: any;
}

const PoetryItem: React.FC<any> = (props) => {
  const { poetryItem } = props;
  console.log(props);

  // const projectDates = new Intl.DateTimeFormat('ru-RU', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // }).format(poetryItem.date);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${poetryItem.image_url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 300,
        }}
      >
        <div className="container">
          <div className="row">
            <div>
              <StyledTitleBlock className="col-12">
                {poetryItem.title}
              </StyledTitleBlock>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-12">
            <Content>
              {parse(
                `<p>${poetryItem.description.split('\n').join('</br>')}</p>`
              )}
            </Content>
            {/*<div className={styles.projectImage}>*/}
            {/*  <img*/}
            {/*    src={poetryItem.image_url}*/}
            {/*    alt={poetryItem.title}*/}
            {/*    style={{ width: '100%' }}*/}
            {/*  />*/}
            {/*  <p>{poetryItem.title}</p>*/}
            {/*</div>*/}

            {/* </div> */}
            {/* <div className="col-xs-12 col-lg-4">
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

const StyledTitleBlock = styled(TitleBlock)`
  color: white;
  text-align: center;
`;

export default PoetryItem;
