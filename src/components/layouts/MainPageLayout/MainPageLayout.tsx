import { FC } from 'react';

import BaseLayout from '../../UI/layouts/BaseLayout';
import { BaseLayoutProps } from '../../UI/layouts/BaseLayout/BaseLayout';

type MainPageLayoutProps = BaseLayoutProps;

const MainPageLayout: FC<MainPageLayoutProps> = ({ children }): JSX.Element => (
  <BaseLayout>{children}</BaseLayout>
);

export default MainPageLayout;
