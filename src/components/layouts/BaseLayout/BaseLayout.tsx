import { FC, ReactNode } from 'react';

import Footer from '@/components/ui/Footer';

export interface BaseLayoutProps {
  className?: string;
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children, className }) => (
  <div className={`min-h-screen ${className ?? ''}`}>
    {children}
    <Footer projectTitle="Павел Клочков" />
  </div>
);

export default BaseLayout;
