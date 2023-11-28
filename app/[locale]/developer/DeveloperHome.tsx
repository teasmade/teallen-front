'use client';
import { Link } from '@/navigation';
import { useTranslations, useLocale } from 'next-intl';

import ScrollToTopButton from '@/components/ScrollTopBtn';

import CvSVG from '@/icons/svgs/iconscout/CvSVG';
import HistorySVG from '@/icons/svgs/iconscout/HistorySVG';
import SkillsSVG from '@/icons/svgs/iconscout/SkillsSVG';
import SkillDetails from '@/components/developer/SkillDetails';
import History from '@/components/developer/History';

export default function DeveloperHome() {
  const t = useTranslations();
  const locale = useLocale();

  const cvPath = () => {
    return `/ALLEN_TE_CV_DEV_${locale.toUpperCase()}_WEB.pdf`;
  };

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
      className="lg:w-full 2xl:w-11/12 lg:mx-auto"
    >
      {/* Intro */}
      <div className="mt-8">
        <h1 className="text-2xl lg:text-4xl font-mono font-bold">
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
          <a
            href={cvPath()}
            target="_blank"
          >
            <div className="border border-white rounded-tl-3xl rounded-br-3xl p-4 bg-sky-700 hover:bg-sky-800 hover:scale-110 hover:translate-x-2 hover:translate-y-2 origin-top-left transition-all ease-in duration-200">
              <div className="flex flex-row justify-around w-32">
                <CvSVG
                  width="72"
                  height="72"
                />
              </div>
              <p className="mt-4 font-mono text-lg lg:text-base">
                {t('home.cv_btn')}
              </p>
            </div>
          </a>
        </div>

        <div className="bg-sky-700 hover:border border-white rounded-tl-3xl rounded-br-3xl hover:scale-110 origin-top-left transition-all ease-in duration-200">
          <button
            onClick={() => scrollToSection('skills-section')}
            className="border border-white rounded-tl-3xl rounded-br-3xl p-4 bg-sky-700 hover:bg-sky-800 hover:scale-110 hover:translate-x-2 hover:translate-y-2 origin-top-left transition-all ease-in duration-200"
          >
            <div className="flex flex-row justify-around w-32">
              <SkillsSVG
                width="72"
                height="72"
              />
            </div>
            <p className="mt-4 font-mono text-lg lg:text-base">skillset</p>
          </button>
        </div>

        <div className="bg-sky-700 hover:border border-white rounded-tl-3xl rounded-br-3xl hover:scale-110 origin-top-left transition-all ease-in duration-200">
          <button
            onClick={() => scrollToSection('history-section')}
            className="border border-white rounded-tl-3xl rounded-br-3xl p-4 bg-sky-700 hover:bg-sky-800 hover:scale-110 hover:translate-x-2 hover:translate-y-2 origin-top-left transition-all ease-in duration-200"
          >
            <div className="flex flex-row justify-around w-32">
              <HistorySVG
                width="72"
                height="72"
              />
            </div>
            <p className="mt-4 font-mono text-lg lg:text-base">history</p>
          </button>
        </div>
      </div>

      <div
        id="skills-section"
        className="my-8 mt-96 mb-96"
      >
        <p className="text-3xl xl:pl-6 pl-2 pt-12 lg:pt-24 sm:pb-8 xl:pb-0 xl:pt-24 font-mono">
          {t('skills.title')}
        </p>
        <div className="flex flex-col items-center xl:block">
          <SkillDetails />
        </div>
      </div>

      <div
        id="history-section"
        className="text-2xl mt-96 pb-24"
      >
        <p className="text-3xl xl:pl-6 pt-12 lg:pt-24 sm:pb-8 xl:pb-0 xl:pt-24 font-mono">
          dev.work.history
        </p>
        <History />
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
            <span className="underline lg:no-underline lg:hover:underline font-mono font-semibold text-xl">
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
