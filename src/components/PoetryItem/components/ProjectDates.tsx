// import { Date } from 'prismic-reactjs';
import React from 'react';

export interface IProjectDatesProps {
  date: Date;
}

const ProjectDates: React.FC<IProjectDatesProps> = ({ date }) => {
  const projectDates = new Intl.DateTimeFormat('ru-RU', {
    // month: 'long',
    year: 'numeric',
  }).format(date);

  return (
    <div className="portfolio-data">
      <b>Когда: </b>
      {projectDates}
    </div>
  );
};

export default ProjectDates;
