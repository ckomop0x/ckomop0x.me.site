import React from 'react';
import PoetryLayout from '../components/containers/PoetryLayout/PoetryLayout';

const Page404 = () => (
  <PoetryLayout>
    <div className="container text-center">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>
        <a href="/">Вернуться на главную</a>
      </p>
    </div>
  </PoetryLayout>
);

export default Page404;
