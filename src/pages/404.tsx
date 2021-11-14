import Link from 'next/link';
import React from 'react';

import InnerPageLayout from '../components/shared/layouts/InnerPageLayout';

export default function Page404(): JSX.Element {
  return (
    <InnerPageLayout>
      <div className="container text-center">
        <h1>404</h1>
        <h2>Страница не найдена</h2>
        <p>
          <Link href="/">Вернуться на главную</Link>
        </p>
      </div>
    </InnerPageLayout>
  );
}
