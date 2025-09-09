import { ReactNode } from 'react';

import MainPageLayout from '@/components/layouts/MainPageLayout';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <MainPageLayout>{children}</MainPageLayout>;
}
