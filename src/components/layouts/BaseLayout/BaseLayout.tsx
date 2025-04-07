import { FC, PropsWithChildren } from 'react';

import Footer from '@/components/ui/Footer';

export interface BaseLayoutProps {
  className?: string;
}

const BaseLayout: FC<PropsWithChildren<BaseLayoutProps>> = ({ children }) => (
  <BaseLayoutWrapper>
    {children}
    <Footer projectTitle="Павел Клочков" />
  </BaseLayoutWrapper>
);

export const BaseLayoutWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="min-h-screen">{children}</div>
);

export default BaseLayout;
