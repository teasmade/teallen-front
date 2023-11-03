import Image from 'next/image';
import TypescriptSVG from '@/svgs/TypescriptSVG';
import ReactSVG from '@/svgs/ReactSVG';
import NextSVG from '@/svgs/NextSVG';
import VueSVG from '@/svgs/VueSVG';
import VuetifySVG from '@/svgs/VuetifySVG';
import TailwindSVG from '@/svgs/TailwindSVG';
import PhpSVG from '@/svgs/PhpSVG';
import LaravelSVG from '@/svgs/LaravelSVG';
import GatsbySVG from '@/svgs/GatsbySVG';
import NginxSVG from '@/svgs/NginxSVG';
import MySqlSVG from '@/svgs/MySqlSVG';
import PostgresSVG from '@/svgs/PostgresSVG';
import NodeSVG from '@/svgs/NodeSVG';
import ExpressSVG from '@/svgs/ExpressSVG';
import FirebaseSVG from '@/svgs/FirebaseSVG';
import ApacheSVG from '@/svgs/ApacheSVG';
import DockerSVG from '@/svgs/DockerSVG';

export default function DevSkillCard() {
  return (
    <div className="scale-[0.9] lg:scale-100 mb-4 lg:mt-0">
      {/* Row 1 - Front & CSS */}
      <div className="gap-6 lg:gap-0 grid grid-cols-7 justify-around">
        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Typescript</div>
          <TypescriptSVG
            width="50"
            height="50"
            className={'border border-blue-700'}
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
            className="bg-slate-300 lg:bg-slate-600 border border-blue-700 rounded"
          />
        </div>

        <div className="skillcard-dev-item">
          <div className="text-xs mt-1">Laravel</div>
          <LaravelSVG
            width="50"
            height="50"
            className="opacity-60 border border-blue-700 rounded"
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
            className="bg-slate-300 lg:bg-slate-300 border border-blue-700 rounded"
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
        <div className="flex flex-row col-start-4 col-end-8 justify-end items-center">
          <span className="bg-blue-600 p-4 rounded text-xs xl:text-sm hover:scale-110 hover:-translate-x-2 ease-in duration-[150ms] hover:underline hover:cursor-pointer">
            CV, History, Portfolio...
          </span>
        </div>
      </div>
    </div>
  );
}
