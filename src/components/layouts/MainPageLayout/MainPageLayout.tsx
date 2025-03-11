import { FC, PropsWithChildren } from 'react';

import BaseLayout from '../BaseLayout';
import { BaseLayoutProps } from '../BaseLayout/BaseLayout';

type MainPageLayoutProps = BaseLayoutProps;

const MainPageLayout: FC<PropsWithChildren<MainPageLayoutProps>> = ({
  children,
}) => <BaseLayout>{children}</BaseLayout>;

export default MainPageLayout;
