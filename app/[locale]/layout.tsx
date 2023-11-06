import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Link } from '../../navigation';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('Nav');

  // TODO: nav to component, make client to allow more dynamic nav menu

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <header className="sticky top-0 z-50">
          <nav className="absolute bg-[#94a3b8ee] lg:bg-transparent text-white font-bold flex flex-row justify-between w-full">
            <details className="dropdown lg:dropdown-right lg:dropdown-end ml-2 mt-1 lg:mt-2">
              <summary className="btn btn-sm lg:btn-md btn-ghost btn-circle bg-[#64748bee] lg:bg-[#5d728bcc]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 lg:h-8 lg:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <ul
                tabIndex={0}
                className="flex flex-col lg:flex-row lg:h-full lg:items-center dropdown-content z-[1] p-2 pr-4 bg-[#94a3b8ee] lg:bg-transparent rounded-br-md -ml-2 lg:ml-0"
              >
                <li className="mt-2 pb-1  lg:mt-0 mr-4 text-xl underline lg:no-underline lg:hover:underline bg-[#64748b88] rounded flex">
                  <Link
                    className="mx-2 lg:inline w-full flex-grow"
                    href={'/'}
                  >
                    {t('home')}
                  </Link>
                </li>
                <li className="mt-2 pb-1  lg:mt-0 mr-4 text-xl underline lg:no-underline lg:hover:underline bg-[#64748b88] rounded flex">
                  <Link
                    className="mx-2 lg:inline w-full flex-grow"
                    href={`/developer`}
                  >
                    {t('developer')}
                  </Link>
                </li>
                <li className="mt-2 pb-1  lg:mt-0 mr-4 text-xl underline lg:no-underline lg:hover:underline bg-[#64748b88] rounded flex">
                  <Link
                    className="mx-2 lg:inline w-full flex-grow"
                    href={`/teacher`}
                  >
                    {t('teacher')}
                  </Link>
                </li>
                <li className="mt-2 pb-1  lg:mt-0 mr-4 text-xl underline lg:no-underline lg:hover:underline bg-[#64748b88] rounded flex">
                  <Link
                    className="mx-2 lg:inline w-full flex-grow"
                    href={`/contact`}
                  >
                    {t('contact')}
                  </Link>
                </li>
                <li className="mt-2 pb-1  lg:mt-0 mr-4 text-xl underline lg:no-underline lg:hover:underline bg-[#64748b88] rounded flex">
                  <Link
                    className="mx-2 lg:inline w-full flex-grow"
                    href={`/blog`}
                  >
                    {t('blog')}
                  </Link>
                </li>
                <li className="mt-2 pb-1  lg:mt-0 mr-4 text-xl underline lg:no-underline lg:hover:underline bg-[#64748b88] rounded flex">
                  <Link
                    className="mx-2 lg:inline w-full flex-grow"
                    href={`/essentials`}
                  >
                    {t('essentials')}
                  </Link>
                </li>
              </ul>
            </details>
            <div></div>
            <LocaleSwitch />
          </nav>
        </header>
        <>{children}</>
      </body>
    </html>
  );
}
