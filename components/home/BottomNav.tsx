import { Link } from '../../navigation';
import { useTranslations } from 'next-intl';

export default function BottomNav() {
  const t = useTranslations('Home.footer-nav');
  return (
    <nav className="w-full flex-grow flex flex-row justify-between lg:grid lg:grid-cols-18 pr-2 lg:pr-0 items-end justify-items-end lg:justify-items-center lg:items-start text-white font-bold">
      <div className="pl-2 lg:col-start-1 lg:col-end-5 lg:order-none text-sm lg:text-2xl lg:self-end pb-4 lg:pb-8 hover:scale-110 ease-in duration-[150ms]">
        <Link
          className="lg:bg-sky-700 lg:btn-home-bottomnav bg-sky-600 py-1 px-2 rounded"
          href="/blog"
        >
          <span className="underline lg:no-underline lg:hover:underline">
            {t('link-blog')}
          </span>
          <span> 📜</span>
        </Link>
      </div>
      <div className="lg:col-start-8 lg:col-end-12 text-sm lg:text-2xl lg:self-end pb-4 lg:pb-8 hover:scale-110 ease-in duration-[150ms]">
        <Link
          className="lg:bg-sky-600 lg:btn-home-bottomnav bg-sky-600 py-1 px-2 rounded"
          href="/contact"
        >
          <span className="underline lg:no-underline lg:hover:underline">
            {t('link-contact')}
          </span>
          <span> 📡</span>
        </Link>
      </div>
      <div className="lg:col-start-14 xl:col-start-15 lg:col-end-18 text-sm lg:text-2xl lg:self-end pb-4 lg:pb-8 -ml-5 hover:scale-110 ease-in duration-[150ms]">
        <Link
          className="lg:bg-sky-800 lg:btn-home-bottomnav lg:pr-0 bg-sky-600 py-1 px-2 rounded"
          href="/essentials"
        >
          <span className="underline lg:no-underline lg:hover:underline">
            {t('link-hr')}
            <span> 👋</span>
          </span>
        </Link>
      </div>
    </nav>
  );
}
