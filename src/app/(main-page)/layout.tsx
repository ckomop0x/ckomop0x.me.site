import { Neucha, Roboto } from 'next/font/google';
import { ReactNode } from 'react';

import '../../styles/globals.css';
import MainPageLayout from '@/components/layouts/MainPageLayout';

const neucha = Neucha({
  subsets: ['cyrillic', 'latin'],
  weight: '400',
  variable: '--font-secondary',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-primary',
});

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const language = 'ru'; // Example: Fetch from user settings, context, or cookies

  return (
    <html lang={params.locale || language}>
      <body className={`${neucha.variable} ${roboto.variable}`}>
        <MainPageLayout>{children}</MainPageLayout>
      </body>
    </html>
  );
}
