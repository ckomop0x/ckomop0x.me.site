import { FC } from 'react';

import BaseLayout from '../../shared/layouts/BaseLayout';
import { IBaseLayoutProps } from '../../shared/layouts/BaseLayout/BaseLayout';

type IMainPageLayoutProps = IBaseLayoutProps;

const MainPageLayout: FC<IMainPageLayoutProps> = ({
  children,
}): JSX.Element => <BaseLayout>{children}</BaseLayout>;

export default MainPageLayout;
