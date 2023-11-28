import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function ContactThanksPage() {
  const t = useTranslations('Contact.form.thanks');

  return (
    <div className="w-full">
      <div className="mt-16 flex flex-col items-center gap-4 form-control w-full">
        <div className="text-2xl">{t('title')}</div>
        <div className="text-xl">{t('content_1')}</div>

        <div
          id="end-section"
          className="flex w-full flex-grow flex flex-row justify-center pr-2 lg:pr-0 items-end justify-items-end lg:justify-items-center lg:items-start text-white font-bold pb-4 mt-8"
        >
          <div className="lg:col-start-8 lg:col-end-12 text-sm lg:text-2xl lg:self-end pb-4 lg:pb-8 hover:scale-110 ease-in duration-[150ms]">
            <Link
              className="btn bg-sky-950 border-none text-white w-1/3 w-full max-w-xs px-16 rounded-2xl rounded-tr-none rounded-bl-none lowercase text-xl hover:scale-110 ease-in duration-[150ms] hover:bg-sky-700"
              href="/"
            >
              <span className="underline lg:no-underline lg:hover:underline text-xl">
                {t('back')}
              </span>
              <span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
