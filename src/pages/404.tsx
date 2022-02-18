import { NextPage } from 'next';
import Link from 'next/link';

import InnerPageLayout from 'components/UI/layouts/InnerPageLayout';

const Page404: NextPage = (): JSX.Element => (
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

export default Page404;
