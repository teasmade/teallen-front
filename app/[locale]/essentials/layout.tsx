import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

export default function EssentialsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const t = useTranslations('Essentials.layout');
  return (
    <main className="pl-2 lg:pl-0 lg:pt-12 min-h-screen bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800">
      <div className="mt-0 pt-12 lg:pt-0 lg:mt-4 lg:grid lg:grid-cols-3 lg:justify-items-center">
        <span className="hidden lg:inline justify-self-end self-end text-white text-5xl font-extrabold opacity-0 -mr-3 pb-1">
          {''}
        </span>
        <h1 className="justify-self-center relative text-white text-5xl lg:text-7xl font-extrabold">
          <span className="opacity-100 absolute lg:left-4 mx-2">
            {t('domain')}
            <span className="text-2xl lg:text-4xl font-semibold">
              {t('title')}
            </span>
          </span>
          <span className="opacity-0 ">{t('name')}</span>
        </h1>
        <span className="hidden lg:inline justify-self-start self-end ml-4 text-white text-4xl opacity-0 ">
          {''}
        </span>
      </div>
      <>{children}</>
    </main>
  );
}
