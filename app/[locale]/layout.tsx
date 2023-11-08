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

  // TODO: nav to component, ??? make client to allow more dynamic nav menu, else back to label version i.e. hide menu on click outside, better ux on mobile.

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <header className="sticky top-0 z-50">
          <nav className="absolute bg-[#94a3b833] lg:bg-[#94a3b833] backdrop-blur-[128px] backdrop-brightness-90 lg:bg-transparent text-white font-bold flex flex-row justify-between w-full lg:h-16">
            <div className="dropdown lg:dropdown-right lg:dropdown-end ml-2 mt-1 lg:mt-2">
              <label
                tabIndex={0}
                className="btn btn-sm lg:btn-md btn-ghost btn-circle bg-[#64748bee] lg:bg-[#5d728bcc]"
              >
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
              </label>
              <ul
                tabIndex={0}
                className="flex flex-col lg:flex-row lg:h-full lg:items-center dropdown-content z-[1] p-2 pr-4 bg-[#94a3b8dd] lg:bg-transparent rounded-br-md -ml-2 lg:ml-0 mt-[3px] lg:mt-0"
              >
                <li className="mt-0 mb-2 pb-1  lg:my-0 mr-4 text-xl underline lg:no-underline lg:hover:underline btn-ghost bg-[#64748b88] rounded-br-lg lg:rounded-none flex lg:mx-0">
                  <Link
                    className="mx-2 lg:inline lg:px-4 w-full flex-grow lg:mx-0"
                    href={'/'}
                  >
                    {t('home')}
                  </Link>
                </li>
                <li className="mt-2 mb-2 pb-1  lg:my-0 mr-4 text-xl underline lg:no-underline lg:hover:underline btn-ghost bg-[#64748b88] rounded-br-lg lg:rounded-none flex lg:mx-0">
                  <Link
                    className="mx-2 lg:inline lg:px-4 w-full flex-grow lg:mx-0"
                    href={`/developer`}
                  >
                    {t('developer')}
                  </Link>
                </li>
                <li className="mt-2 mb-2 pb-1  lg:my-0 mr-4 text-xl underline lg:no-underline lg:hover:underline btn-ghost bg-[#64748b88] rounded-br-lg lg:rounded-none flex lg:mx-0">
                  <Link
                    className="mx-2 lg:inline lg:px-4 w-full flex-grow lg:mx-0"
                    href={`/teacher`}
                  >
                    {t('teacher')}
                  </Link>
                </li>
                <li className="mt-2 mb-2 pb-1  lg:my-0 mr-4 text-xl underline lg:no-underline lg:hover:underline btn-ghost bg-[#64748b88] rounded-br-lg lg:rounded-none flex lg:mx-0">
                  <Link
                    className="mx-2 lg:inline lg:px-4 w-full flex-grow lg:mx-0"
                    href={`/contact`}
                  >
                    {t('contact')}
                  </Link>
                </li>
                <li className="mt-2 mb-2 pb-1  lg:my-0 mr-4 text-xl underline lg:no-underline lg:hover:underline btn-ghost bg-[#64748b88] rounded-br-lg lg:rounded-none flex lg:mx-0">
                  <Link
                    className="mx-2 lg:inline lg:px-4 w-full flex-grow lg:mx-0"
                    href={`/blog`}
                  >
                    {t('blog')}
                  </Link>
                </li>
                <li className="mt-2 mb-2 pb-1  lg:my-0 mr-4 text-xl underline lg:no-underline lg:hover:underline btn-ghost bg-[#64748b88] rounded-br-lg flex lg:mx-0">
                  <Link
                    className="mx-2 lg:inline lg:px-4 w-full flex-grow lg:mx-0"
                    href={`/essentials`}
                  >
                    {t('essentials')}
                  </Link>
                </li>
              </ul>
            </div>
            <div></div>
            <LocaleSwitch />
          </nav>
        </header>
        <>{children}</>
      </body>
    </html>
  );
}
