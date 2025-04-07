import { FC, PropsWithChildren } from 'react';

import Nav from '@/components/ui/Nav';

const InnerPageLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Nav isInner={true} />
    <InnerPageLayoutWrapper>{children}</InnerPageLayoutWrapper>
  </>
);

export const InnerPageLayoutWrapper: FC<PropsWithChildren> = ({ children }) => (
  <main className="text-[#a5a5a5]">{children}</main>
);

export default InnerPageLayout;
