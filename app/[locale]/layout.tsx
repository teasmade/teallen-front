import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Link } from '../../navigation';

import LocaleSwitch from '@/components/LocaleSwitch';

const inter = Inter({ subsets: ['latin'] });
const locales = ['en', 'fr'];

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <nav className="absolute bg-transparent text-white font-bold flex flex-row justify-between w-full">
          <div>
            <Link
              className="mx-2"
              href={'/'}
            >
              home
            </Link>
            <Link
              className="mx-2"
              href={`/developer`}
            >
              developer
            </Link>
            <Link
              className="mx-2"
              href={`/teacher`}
            >
              teacher
            </Link>
            <Link
              className="mx-2"
              href={`/contact`}
            >
              contact
            </Link>
            <Link
              className="mx-2"
              href={`/blog`}
            >
              blog
            </Link>
          </div>
          <LocaleSwitch />
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
