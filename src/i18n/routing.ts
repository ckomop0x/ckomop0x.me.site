// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ua', 'ru'],
  defaultLocale: 'ua',
  // Optional: uncomment to hide prefix for default locale:
  localePrefix: 'as-needed',
});
