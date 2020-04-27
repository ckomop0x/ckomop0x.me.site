import { WebUrlIcon } from '@components/Icons';
import React from 'react';

export interface IProjectUrlProps {
  projectUrl: string;
  projectTitle: string;
}

const ProjectUrl: React.FC<IProjectUrlProps> = ({
  projectUrl,
  projectTitle,
}) => (
  <div>
    {/*<WebUrlIcon />*/}
    <b>Сайт проекта:</b>{' '}
    <a
      title={projectTitle}
      rel="nofollow noopener noreferrer"
      href={projectUrl}
      target="_blank"
    >
      Перейти на сайт
    </a>
  </div>
);

export default ProjectUrl;
