import { ReactNode } from 'react';

import InnerPageLayout from '@/components/layouts/InnerPageLayout';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <InnerPageLayout>{children}</InnerPageLayout>;
}
