import { FC, PropsWithChildren } from 'react';

import BaseLayout from '@/components/layouts/BaseLayout';
import Nav from '@/components/ui/Nav';

const InnerPageLayout: FC<PropsWithChildren> = ({ children }) => (
  <BaseLayout>
    <Nav isInner={true} />
    <InnerPageLayoutWrapper>{children}</InnerPageLayoutWrapper>
  </BaseLayout>
);

export const InnerPageLayoutWrapper: FC<PropsWithChildren> = ({ children }) => (
  <main className="text-[#a5a5a5]">{children}</main>
);

export default InnerPageLayout;
