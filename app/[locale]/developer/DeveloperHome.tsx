'use client';

import { useTranslations } from 'next-intl';

import CvSVG from '@/icons/svgs/iconscout/CvSVG';
import HistorySVG from '@/icons/svgs/iconscout/HistorySVG';
import SkillsSVG from '@/icons/svgs/iconscout/SkillsSVG';
import SkillDetails from '@/components/developer/SkillDetails';

export default function DeveloperHome() {
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
          <div className="border border-white rounded-tl-3xl rounded-br-3xl p-4 bg-sky-700 hover:bg-sky-800 hover:scale-110 hover:translate-x-2 hover:translate-y-2 origin-top-left transition-all ease-in duration-200">
            <div className="flex flex-row justify-around w-32">
              <CvSVG
                width="72"
                height="72"
              />
            </div>
            <p className="mt-4 font-mono text-lg lg:text-base">cv_dev_en.pdf</p>
          </div>
        </div>
        {/* <p className="mt-4 font-mono xl:hidden">cv_dev_en.pdf</p> */}

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
        {/* <p className="mt-4 font-mono xl:hidden">skillset</p> */}

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
            <p className="mt-4 font-mono text-lg lg:text-base">background</p>
          </button>
        </div>
      </div>
      {/* <p className="mt-4 font-mono xl:hidden">background</p> */}

      <div
        id="skills-section"
        className="my-8 mt-96 mb-96"
      >
        <p className="text-3xl xl:pl-6 pl-2 pt-12 lg:pt-24 sm:pb-8 xl:pb-0 xl:pt-24 font-mono">
          {t('skills.title')}
        </p>
        <SkillDetails />
      </div>

      <div
        id="history-section"
        className="text-2xl my-96"
      >
        <p className="pt-12">HISTORY</p>
      </div>

      <p className="pb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, impedit.
        Accusantium consectetur ipsum quaerat facere cum corporis recusandae
        vero, dolores, sit natus vitae maiores architecto animi laboriosam
        aspernatur deleniti nulla. Ipsam saepe dolores dolore dignissimos,
        consequatur maiores nulla explicabo voluptates et esse sequi quae,
        provident voluptatum at nemo omnis iusto, nesciunt similique libero quo.
        Sed, rem? Inventore sint laboriosam dolor. Similique esse ipsa repellat
        sed atque commodi, necessitatibus harum quod exercitationem enim aperiam
        voluptates dolorem possimus dolor veniam unde illum nulla! Est fugit
        voluptate corporis sequi corrupti voluptates amet harum? Iure laudantium
        unde possimus dignissimos. Sit molestiae suscipit quis sint omnis
        laboriosam commodi fugit, quasi libero maiores modi, cumque, totam
        eveniet harum unde veniam id aliquid porro tempora? Praesentium,
        aspernatur! Voluptas hic veritatis similique in unde debitis, aut veniam
        quaerat illo ullam vel odit sed autem quasi asperiores natus. Fugit
        reprehenderit iusto accusamus sint alias, commodi minima cupiditate qui
        nulla.
      </p>
    </div>
  );
}
