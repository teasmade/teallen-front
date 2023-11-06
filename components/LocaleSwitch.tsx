'use client';

import { Link, usePathname, useRouter } from '../navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import enPng from '../icons/pngs/en.png';
import frPng from '../icons/pngs/fr.png';

export default function LocaleSwitch() {
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <div className="flex flex-row items-center bg-[#64748b88] rounded-full px-1 scale-[0.75] lg:scale-100 lg:mt-2 lg:mr-2">
      <button
        className={
          (locale === 'en' ? 'bg-sky-900' : 'bg-gray-600 opacity-50') +
          ' rounded-full p-1 my-1 mr-1 text-gray-200'
        }
      >
        <Link
          locale="en"
          href={pathname}
        >
          <Image
            src={enPng}
            alt="English"
            width={24}
            height={24}
          />
        </Link>
      </button>
      <button
        className={
          (locale === 'fr' ? 'bg-sky-900' : 'bg-gray-600 opacity-50') +
          ' rounded-full p-1 my-1 text-gray-200'
        }
      >
        <Link
          locale="fr"
          href={pathname}
        >
          <Image
            src={frPng}
            alt="Français"
            width={24}
            height={24}
          />
        </Link>
      </button>
    </div>
  );
}
