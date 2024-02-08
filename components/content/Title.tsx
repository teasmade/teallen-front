import { useTranslations } from 'next-intl';

export default function Title({
  contentSection,
  sectionColor,
}: {
  contentSection: string;
  sectionColor: string;
}) {
  const t = useTranslations(`${contentSection}.layout`);

  const colorVariants: { [key: string]: string } = {
    // teal: 'lg:bg-teal-700',
    slate: 'lg:bg-slate-700',
    sky: 'lg:bg-sky-700',
    sky_dark: 'lg:bg-sky-800',
    sky_darker: 'lg:bg-sky-900',
    // violet: 'lg:bg-violet-700',
    // green: 'lg:bg-green-700',
    // orange: 'lg:bg-orange-700',
    // stone: 'lg:bg-stone-700',
    // amber: 'lg:bg-amber-700',
    // cyan: 'lg:bg-cyan-700',
  };

  const fontVariants: { [key: string]: string } = {
    Developer: 'font-mono',
    Teacher: 'font-slab',
    Blog: '',
    Contact: '',
    Essentials: '',
  };

  return (
    <div
      className={`mt-0 pt-12 lg:pt-0 lg:mt-4 lg:pb-2 lg:grid lg:grid-cols-3 lg:justify-items-center ${colorVariants[sectionColor]}`}
    >
      <span className="hidden lg:inline justify-self-end self-end text-5xl font-extrabold opacity-0 -mr-3 pb-1">
        {''}
      </span>
      <h1 className="justify-self-center relative text-5xl lg:text-7xl font-extrabold">
        <span className={`opacity-100 absolute lg:left-[14px] mx-2`}>
          {t('domain')}
          <span
            className={`text-2xl lg:text-4xl font-semibold absolute bottom-0 whitespace-nowrap ${fontVariants[contentSection]}`}
          >
            {t('title')}
          </span>
        </span>
        <span className="opacity-0 ">{t('name')}</span>
      </h1>
      <span className="hidden lg:inline justify-self-start self-end ml-4 text-4xl opacity-0 ">
        {''}
      </span>
    </div>
  );
}
