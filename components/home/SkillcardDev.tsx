import TypescriptSVG from '@/icons/svgs/TypescriptSVG';
import ReactSVG from '@/icons/svgs/ReactSVG';
import NextSVG from '@/icons/svgs/NextSVG';
import VueSVG from '@/icons/svgs/VueSVG';
import VuetifySVG from '@/icons/svgs/VuetifySVG';
import TailwindSVG from '@/icons/svgs/TailwindSVG';
import PhpSVG from '@/icons/svgs/PhpSVG';
import LaravelSVG from '@/icons/svgs/LaravelSVG';
import GatsbySVG from '@/icons/svgs/GatsbySVG';
import NginxSVG from '@/icons/svgs/NginxSVG';
import MySqlSVG from '@/icons/svgs/MySqlSVG';
import PostgresSVG from '@/icons/svgs/PostgresSVG';
import NodeSVG from '@/icons/svgs/NodeSVG';
import ExpressSVG from '@/icons/svgs/ExpressSVG';
import FirebaseSVG from '@/icons/svgs/FirebaseSVG';
import ApacheSVG from '@/icons/svgs/ApacheSVG';
import DockerSVG from '@/icons/svgs/DockerSVG';

import { useTranslations } from 'next-intl';

export default function SkillcardDev() {
  const t = useTranslations('Home.dev');

  return (
    <div className="mx-2 mb-4 lg:mt-0 font-mono font-bold">
      {/* Row 1 - Front & CSS */}
      <div className="gap-6 lg:gap-0 grid grid-cols-7 justify-around">
        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Typescript</div>
          <TypescriptSVG
            width="50"
            height="50"
            className={'border border-sky-700'}
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">React</div>
          <ReactSVG
            width="50"
            height="50"
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Next</div>
          <NextSVG
            width="50"
            height="50"
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Gatsby</div>
          <GatsbySVG
            width="50"
            height="50"
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Vue</div>
          <VueSVG
            width="50"
            height="50"
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Vuetify</div>
          <VuetifySVG
            width="50"
            height="50"
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Tailwind</div>
          <TailwindSVG
            width="50"
            height="50"
          />
        </div>
      </div>

      {/* Row 2 - Back & Databases */}

      <div className="gap-6 lg:gap-0 grid grid-cols-7 justify-around mt-4">
        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">PHP</div>
          <PhpSVG
            width="50"
            height="50"
            className="bg-slate-300 lg:bg-slate-600 border border-sky-700 rounded"
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Laravel</div>
          <LaravelSVG
            width="50"
            height="50"
            className="opacity-60 border border-sky-700 rounded"
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Node</div>
          <NodeSVG
            width="50"
            height="50"
            className="opacity-80"
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Express</div>
          <ExpressSVG
            width="50"
            height="50"
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Postgres</div>
          <PostgresSVG
            width="50"
            height="50"
            className="opacity-80"
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">MySQL</div>
          <MySqlSVG
            width="50"
            height="50"
            className="bg-slate-300 lg:bg-slate-300 border border-sky-700 rounded"
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Firebase</div>
          <FirebaseSVG
            width="50"
            height="50"
            className="opacity-80"
          />
        </div>
      </div>

      {/* Row 3 - DevOps */}

      <div className="gap-6 lg:gap-0 grid grid-cols-7 justify-around mt-4">
        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Apache</div>
          <ApacheSVG
            width="50"
            height="50"
            className="brightness-75"
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Nginx</div>
          <NginxSVG
            width="50"
            height="50"
            className="brightness-150 lg:brightness-125"
          />
        </div>
        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Docker</div>
          <DockerSVG
            width="50"
            height="50"
            className="brightness-150 lg:brightness-125"
          />
        </div>

        {/* CTA Link */}
        <div className="flex flex-row col-start-5 col-end-8 justify-end items-center self-end -mr-2 lg:mr-0">
          <span className="bg-sky-600 py-4 px-2 rounded text-[0.8rem] xl:text-sm hover:scale-110 hover:-translate-x-2 ease-in duration-[150ms] underline lg:no-underline hover:underline hover:cursor-pointer hover:bg-sky-900 font-sans font-bold antialised">
            {t('btn-cta')}
          </span>
        </div>
      </div>
    </div>
  );
}
