'use client';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import IndividualSVG from '@/icons/svgs/undraw/IndividualSVG';
import TeamSVG from '@/icons/svgs/undraw/TeamSVG';
import OrgSVG from '@/icons/svgs/undraw/OrgSVG';
import ScrollToTopButton from '@/components/ScrollTopBtn';

export default function TeacherHome() {
  const t = useTranslations();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };
  return (
    <div
      id="intro"
      className="lg:w-full 2xl:w-11/12 lg:mx-auto text-white"
    >
      {/* Intro */}
      <div className="mt-8">
        <h1 className="text-2xl lg:text-4xl font-slab font-bold">
          {t('home.title')}
        </h1>
        <ul className="mt-16 mx-4 lg:ml-52 text-sm lg:text-lg font-semibold list-disc">
          <li className="mb-2 lg:mb-4">{t('home.intro_li_1')}</li>
          <li className="mb-2 lg:mb-4">{t('home.intro_li_2')}</li>
          <li className="mb-2 lg:mb-4">{t('home.intro_li_3')}</li>
          <li className="mb-2 lg:mb-4">{t('home.intro_li_4')}</li>
          <li className="mb-2 lg:mb-4">{t('home.intro_li_5')}</li>
        </ul>
      </div>

      {/* Jump nav */}
      <div
        id="jump-nav"
        className="mt-12 xl:mt-24 flex flex-row justify-center gap-8 xl:gap-32 scale-[0.7] lg:scale-100"
      >
        <div className="bg-sky-700 hover:border border-white rounded-tl-3xl rounded-br-3xl hover:scale-110 origin-top-left transition-all ease-in duration-200">
          <button
            onClick={() => scrollToSection('individual-section')}
            className="items-center border border-white rounded-tl-3xl rounded-br-3xl p-4 bg-sky-700 hover:bg-sky-800 hover:scale-110 hover:translate-x-2 hover:translate-y-2 origin-top-left transition-all ease-in duration-200"
          >
            <div className="flex flex-row justify-around w-32">
              <IndividualSVG
                width="72"
                height="72"
                className="h-20 w-40 "
              />
            </div>
            <p className="mt-4 font-slab font-bold text-lg lg:text-base">
              {t('home.individuals.button')}
            </p>
          </button>
        </div>

        <div className="bg-sky-700 hover:border border-white rounded-tl-3xl rounded-br-3xl hover:scale-110 origin-top-left transition-all ease-in duration-200">
          <button
            onClick={() => scrollToSection('team-section')}
            className="border border-white rounded-tl-3xl rounded-br-3xl p-4 bg-sky-700 hover:bg-sky-800 hover:scale-110 hover:translate-x-2 hover:translate-y-2 origin-top-left transition-all ease-in duration-200"
          >
            <div className="flex flex-row justify-around w-32">
              <TeamSVG
                width="72"
                height="72"
                className="h-20 w-40 "
              />
            </div>
            <p className="mt-4 font-slab font-bold text-lg lg:text-base">
              {t('home.teams.button')}
            </p>
          </button>
        </div>

        <div className="bg-sky-700 hover:border border-white rounded-tl-3xl rounded-br-3xl hover:scale-110 origin-top-left transition-all ease-in duration-200">
          <button
            onClick={() => scrollToSection('org-section')}
            className="border border-white rounded-tl-3xl rounded-br-3xl p-4 bg-sky-700 hover:bg-sky-800 hover:scale-110 hover:translate-x-2 hover:translate-y-2 origin-top-left transition-all ease-in duration-200"
          >
            <div className="flex flex-row justify-around w-32">
              <OrgSVG
                width="72"
                height="72"
                className="h-20 w-40 "
              />
            </div>
            <p className="mt-4 font-slab font-bold text-lg lg:text-base">
              {t('home.orgs.button')}
            </p>
          </button>
        </div>
      </div>

      <div
        id="individual-section"
        className="my-8 mt-96 mb-96"
      >
        <p className="text-3xl xl:pl-6 pl-2 pt-12 lg:pt-24 sm:pb-8 xl:pb-0 xl:pt-24 font-slab font-bold mb-4">
          {t('home.individuals.title')}
        </p>
        {/* <Individuals /> */}
        <div className="flex flex-col-reverse lg:flex-row w-full items-center lg:justify-between xl:pl-6 pl-2">
          <div className="w-7/8 md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col justify-around gap-4">
            <div className="lg:text-lg">{t('home.individuals.content_1')}</div>
            <div className="lg:text-lg">{t('home.individuals.content_2')}</div>
            <div className="lg:text-lg">{t('home.individuals.content_3')}</div>
            <div className="lg:text-lg">{t('home.individuals.content_4')}</div>
            <div className="lg:text-lg">{t('home.individuals.content_5')}</div>
          </div>
          <IndividualSVG
            width="30"
            height="30"
            className="w-1/3 lg:w-1/4 h-1/4 self-start md:self-center lg:self-start mb-8 lg:mb-0"
          />
        </div>
      </div>

      <div
        id="team-section"
        className="my-8 mt-96 mb-96"
      >
        <p className="lg:hidden text-3xl xl:pl-6 pl-2 pt-12 lg:pt-24 sm:pb-8 xl:pb-0 xl:pt-24 font-slab font-bold mb-4">
          {t('home.teams.title')}
        </p>
        {/* <Teams /> */}
        <div className="flex flex-col-reverse lg:flex-row-reverse w-full items-center lg:justify-between xl:pl-6 pl-2">
          <div className="w-7/8 md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col justify-around gap-4">
            <p className="hidden lg:block text-3xl pt-12 lg:pt-24 sm:pb-8 xl:pb-0 xl:pt-24 font-slab font-bold lg:mb-4">
              {t('home.teams.title')}
            </p>
            <div className="lg:text-lg">{t('home.teams.content_1')}</div>
            <div className="lg:text-lg">{t('home.teams.content_2')}</div>
            <div className="lg:text-lg">{t('home.teams.content_3')}</div>
            <div className="lg:text-lg">{t('home.teams.content_4')}</div>
            <div className="lg:text-lg">{t('home.teams.content_5')}</div>
          </div>
          <TeamSVG
            width="30"
            height="30"
            className="w-1/3 lg:w-1/4 h-1/4 self-start md:self-center lg:self-center mb-8 lg:mb-0 lg:pt-24"
          />
        </div>
      </div>

      <div
        id="org-section"
        className="my-8 mt-96 mb-96"
      >
        <p className="text-3xl xl:pl-6 pl-2 pt-12 lg:pt-24 sm:pb-8 xl:pb-0 xl:pt-24 font-slab font-bold mb-4">
          {t('home.orgs.title')}
        </p>
        {/* <Organisations /> */}
        <div className="flex flex-col-reverse lg:flex-row w-full items-center lg:justify-between xl:pl-6 pl-2">
          <div className="w-7/8 md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col justify-around gap-4">
            <div className="lg:text-lg">{t('home.orgs.content_1')}</div>
            <div className="lg:text-lg">{t('home.orgs.content_2')}</div>
            <div className="lg:text-lg">{t('home.orgs.content_3')}</div>
            <div className="lg:text-lg">{t('home.orgs.content_4')}</div>
            <div className="lg:text-lg">{t('home.orgs.content_5')}</div>
          </div>
          <OrgSVG
            width="30"
            height="30"
            className="w-1/3 lg:w-1/4 h-1/4 self-start md:self-center lg:self-start mb-8 lg:mb-0"
          />
        </div>
      </div>

      <div
        id="end-section"
        className="flex w-full flex-grow flex flex-row justify-center pr-2 lg:pr-0 items-end justify-items-end lg:justify-items-center lg:items-start text-white font-bold pb-4"
      >
        <div className="lg:col-start-8 lg:col-end-12 text-sm lg:text-2xl lg:self-end pb-4 lg:pb-8 hover:scale-110 ease-in duration-[150ms]">
          <Link
            className="lg:bg-sky-600 lg:btn-home-bottomnav rounded-tl-2xl rounded-br-2xl bg-sky-600 py-2 px-2"
            href="/contact"
          >
            <span className="underline lg:no-underline lg:hover:underline font-slab font-semibold text-xl">
              {t('layout.cta')}
            </span>
            <span> 📡</span>
          </Link>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
