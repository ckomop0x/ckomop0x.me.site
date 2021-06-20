import React from 'react';

import PoetryLayout from '../components/layouts/PoetryLayout/PoetryLayout';

export default function Page404(): JSX.Element {
  return (
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
}
