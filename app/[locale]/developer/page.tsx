'use client';

import CvSVG from '@/icons/svgs/CvSVG';
import HistorySVG from '@/icons/svgs/HistorySVG';
import SkillsSVG from '@/icons/svgs/SkillsSVG';

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
      className="w-8/12 mx-auto"
    >
      {/* Intro */}
      <div className="mt-8">
        <h1 className="text-4xl font-mono font-bold">Developer Intro</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          accusamus commodi deserunt, recusandae rem ea laborum molestiae.
          Quidem nisi sequi assumenda.
        </p>
      </div>

      {/* Jump nav */}
      <div
        id="jump-nav"
        className="mt-24 flex flex-row justify-around"
      >
        <div className="border border-white rounded-tl-3xl rounded-br-3xl p-4 bg-sky-700 hover:bg-sky-800 hover:scale-110 origin-top-left transition-all ease-in duration-200">
          <div className="flex flex-row justify-around w-32">
            <CvSVG
              width="72"
              height="72"
            />
          </div>
          <p className="mt-4 font-mono">cv_dev_en.pdf</p>
        </div>

        <button
          onClick={() => scrollToSection('skills-section')}
          className="border border-white rounded-tl-3xl rounded-br-3xl p-4 bg-sky-700 hover:bg-sky-800 hover:scale-110 origin-top-left transition-all ease-in duration-200"
        >
          <div className="flex flex-row justify-around w-32">
            <SkillsSVG
              width="72"
              height="72"
            />
          </div>
          <p className="mt-4 font-mono">skillset</p>
        </button>

        <button
          onClick={() => scrollToSection('history-section')}
          className="border border-white rounded-tl-3xl rounded-br-3xl p-4 bg-sky-700 hover:bg-sky-800 hover:scale-110 origin-top-left transition-all ease-in duration-200"
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

      <p className="w-48">
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
        className="text-2xl my-8"
      >
        <p className="pt-32">SKILLS</p>
      </div>

      <p className="w-48">
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
        id="history-section"
        className="text-2xl my-8"
      >
        <p>HISTORY</p>
      </div>

      <p className="w-48">
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
