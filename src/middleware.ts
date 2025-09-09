// src/middleware.ts
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match everything except internal paths and assets
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
