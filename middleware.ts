import createMiddleware from 'next-intl/middleware';
import { locales } from './navigation';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'always',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*'],
};
