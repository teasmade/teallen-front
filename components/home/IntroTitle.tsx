import { useTranslations } from 'next-intl';

export default function IntroTitle() {
  const t = useTranslations('Home.title');

  return (
    <section className="lg:w-full lg:mr-4 mt-12 lg:mt-4 flex flex-row lg:grid lg:grid-rows-none lg:grid-cols-7 xl:gap-12 justify-items-center pl-2 lg:pl-0 transition-all duration-600 ease-in-out hover:opacity-100">
      <span className="self-end lg:self-end lg:justify-self-end text-2xl lg:text-4xl font-bold text-white lg:opacity-0 group-hover:opacity-100 duration-1000 ease-in-out 2xl:pl-8 lg:col-start-2 2xl:col-start-3">
        {t('hello')}
      </span>

      <h1 className="justify-self-start lg:justify-self-center relative text-3xl lg:text-7xl lg:col-start-4 font-bold text-white">
        <span className="absolute left-4 opacity-0 lg:opacity-100 group-hover:opacity-0 duration-300 ease-out font-extrabold">
          {t('initials')}
        </span>

        <span className="mx-2 lg:mx-0 justify-self-start lg:opacity-0 group-hover:opacity-100 duration-300 ease-out">
          {t('name')}
        </span>
      </h1>

      <span className="lg:w-full lg:ml-4 lg:justify-self-start self-end 2xl:justify-self-start text-2xl lg:text-4xl font-bold text-white lg:opacity-0 group-hover:opacity-100 duration-1000 ease-in-out lg:col-start-6 2xl:col-start-5 lg:col-span-2 2xl:col-auto">
        {t('and')}
      </span>
    </section>
  );
}
