import React from 'react';
import PoetryLayout from '../containers/PoetryLayout/PoetryLayout';

const Page404 = () => (
  <PoetryLayout>
    <div className="container text-center">
      <h1>404</h1>
      <h2>Document not found</h2>
      <p>
        <a href="/">Return to homepage</a>
      </p>
    </div>
  </PoetryLayout>
);

export default Page404;
