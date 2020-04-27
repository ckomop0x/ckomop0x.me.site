import React from 'react';

const ProjectTerms = ({ projectTerms }: any) => {
  return (
    <div className="portfolio-data">
      <b>Сроки: </b>
      {projectTerms}
    </div>
  );
};

export default ProjectTerms;
