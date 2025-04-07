import { FC, PropsWithChildren } from 'react';

import Footer from '@/components/ui/Footer';

export interface BaseLayoutProps {
  className?: string;
}

const BaseLayout: FC<PropsWithChildren<BaseLayoutProps>> = ({ children }) => (
  <div className="min-h-screen">
    {children}
    <Footer projectTitle="Павел Клочков" />
  </div>
);

export default BaseLayout;
