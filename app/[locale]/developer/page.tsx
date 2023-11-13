'use client';

import CvSVG from '@/icons/svgs/iconscout/CvSVG';
import HistorySVG from '@/icons/svgs/iconscout/HistorySVG';
import SkillsSVG from '@/icons/svgs/iconscout/SkillsSVG';
import SkillDetails from '@/components/developer/SkillDetails';

export default function DeveloperHome() {
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
      className="lg:w-10/12 lg:mx-auto"
    >
      {/* Intro */}
      <div className="mt-8">
        <h1 className="lg:text-4xl font-mono font-bold">Developer Intro</h1>
        <p className="lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          accusamus commodi deserunt, recusandae rem ea laborum molestiae.
          Quidem nisi sequi assumenda.
        </p>
      </div>

      {/* Jump nav */}
      <div
        id="jump-nav"
        className="mt-12 xl:mt-24 flex flex-col xl:flex-row justify-center xl:gap-32"
      >
        <div className="bg-sky-700 hover:border border-white rounded-tl-3xl rounded-br-3xl hover:scale-110 origin-top-left transition-all ease-in duration-200 hidden xl:block">
          <div className="border border-white rounded-tl-3xl rounded-br-3xl p-4 bg-sky-700 hover:bg-sky-800 hover:scale-110 hover:translate-x-2 hover:translate-y-2 origin-top-left transition-all ease-in duration-200">
            <div className="flex flex-row justify-around w-32">
              <CvSVG
                width="72"
                height="72"
              />
            </div>
            <p className="mt-4 font-mono">cv_dev_en.pdf</p>
          </div>
        </div>
        <p className="mt-4 font-mono xl:hidden">cv_dev_en.pdf</p>

        <div className="bg-sky-700 hover:border border-white rounded-tl-3xl rounded-br-3xl hover:scale-110 origin-top-left transition-all ease-in duration-200 hidden xl:block">
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
            <p className="mt-4 font-mono">skillset</p>
          </button>
        </div>
        <p className="mt-4 font-mono xl:hidden">skillset</p>

        <div className="bg-sky-700 hover:border border-white rounded-tl-3xl rounded-br-3xl hover:scale-110 origin-top-left transition-all ease-in duration-200 hidden xl:block">
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
            <p className="mt-4 font-mono">background</p>
          </button>
        </div>
      </div>
      <p className="mt-4 font-mono xl:hidden">background</p>

      <p className="mt-12">
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

      <div
        id="skills-section"
        className="my-8 mb-72"
      >
        <p className="text-2xl pt-24 font-mono">skillset</p>
        <SkillDetails />
      </div>

      <div
        id="history-section"
        className="text-2xl my-8"
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
