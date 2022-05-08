import { FC } from 'react';

import BaseLayout from '../BaseLayout';
import { BaseLayoutProps } from '../BaseLayout/BaseLayout';

type MainPageLayoutProps = BaseLayoutProps;

const MainPageLayout: FC<MainPageLayoutProps> = ({ children }): JSX.Element => (
  <BaseLayout>{children}</BaseLayout>
);

export default MainPageLayout;
