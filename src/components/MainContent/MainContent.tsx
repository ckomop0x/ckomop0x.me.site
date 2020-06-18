import React from 'react';

import { MainContentWrapper } from './styles';

export interface IMainContent {
  content: any;
}

const MainContent: React.FC<IMainContent> = ({ content }) => {
  return <MainContentWrapper className="container"></MainContentWrapper>;
};

export default MainContent;
