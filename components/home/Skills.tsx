import { useTranslations } from 'next-intl';
import SkillcardDev from '@/components/home/SkillcardDev';

export default function Skills() {
  const t = useTranslations('Home');
  return (
    <section className="w-full flex-grow flex flex-col justify-around lg:grid lg:grid-cols-home lg:justify-items-center mt-4 lg:mt-4 lg:mt-12 2xl:mt-36 items-start text-white font-bold transition-all duration-700 ease-in-out">
      {/* Dev subtitle */}

      <div className="hidden lg:block py-2 w-full text-6xl bg-sky-700 duration-700 text-center lg:opacity-0 group-hover:opacity-100">
        <span className="opacity-0">*</span>
      </div>

      <div className="text-4xl lg:text-6xl self-start lg:self-auto lg:relative pl-2 lg:px-6 lg:py-2 group/dev lg:group-hover:bg-sky-700 duration-700 mb-4 lg:mb-0">
        <div className="lg:flex lg:flex-row-reverse flex flex-row justify-between bg-sky-700 lg:bg-transparent -ml-2 lg:ml-0">
          <span className="opacity-100 lg:group-hover:opacity-100 duration-1000 ease-in lg:bg-sky-600 lg:group-hover/dev:bg-sky-900 lg:px-4 rounded">
            <span className="relative bottom-[3px] lg:bottom-[6px]">
              {'</>'}
            </span>
          </span>
          <span className="lg:opacity-0 group-hover:opacity-100 duration-1000 ease-in-out lg:text-2xl lg:leading-tight xl:text-3xl 2xl:text-4xl text-2xl pr-4 font-mono pl-6 lg:pl-0">
            {t('dev.title')}
          </span>
        </div>

        {/* Dev info */}

        <div className="text-sm lg:text-base lg:absolute mt-4 lg:mt-0 lg:left-0 pr-2 lg:px-8 lg:py-4 lg:rounded text-[0.775rem] lg:text-base lg:opacity-0 lg:group-hover/dev:opacity-100 lg:group-hover/dev:bg-sky-700 duration-[800ms] ease-in font-mono">
          <div className="mb-8 lg:mb-4">
            {
              '💡 I love the work of continuous learning, understanding dynamic contexts & exploring new environments - these challenges are what drove my career switch into the tech world.'
            }
          </div>
          <div className="mb-8 lg:mb-4">
            {
              '💪 Self-development: widening & deepening my skillset, learning & collaborating, tackling problems & finding solutions across a wide range of projects & teams.'
            }
          </div>
          <div className="mb-2 lg:mb-4">
            {'🖥️ I have fullstack skills & work experience in:'}
          </div>
          <SkillcardDev />
        </div>
      </div>

      {/* Center cell */}

      <div className="hidden lg:block py-2 w-full text-6xl bg-sky-700 text-center lg:opacity-0 group-hover:opacity-100 duration-700">
        <span className="opacity-0">*</span>
      </div>

      {/* Teach subtitle */}

      <div className="text-4xl lg:text-6xl self-end lg:self-auto lg:relative pl-2 lg:px-6 lg:py-2 pb-4 lg:block group/teach lg:group-hover:bg-sky-700 duration-700">
        <div className="lg:flex lg:flex-row flex flex-row justify-between bg-sky-700 lg:bg-transparent -ml-2 lg:ml-0">
          <span className="opacity-100 lg:group-hover:opacity-100 transition-all duration-1000 ease-in lg:bg-sky-600 lg:group-hover/teach:bg-sky-900 lg:px-4 rounded">
            <span className="relative bottom-[3px] lg:bottom-[6px]">
              <span className="text-4xl lg:text-5xl mx-1 lg:mr-2 font-slab">
                en
              </span>
              <span>/</span>
              <span className="text-4xl lg:text-5xl font-slab">fr</span>
            </span>
          </span>
          <span className="lg:opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out lg:leading-tight lg:text-2xl xl:text-3xl 2xl:text-4xl text-2xl font-slab font-semibold tracking-wide pr-4 lg:pr-2 lg:pl-0 lg:ml-4">
            {t('teach.title')}
          </span>
        </div>

        {/* Teach info */}

        <div className="lg:absolute mt-4 lg:mt-0 lg:left-0 pr-2 lg:px-8 lg:py-4 lg:rounded text-sm lg:text-base lg:opacity-0 lg:group-hover/teach:opacity-100 lg:group-hover/teach:bg-sky-700 duration-[800ms] ease-in font-sans font-medium antialiased mb-4 lg:mb-0">
          <div className="mb-8 lg:mb-4">
            {
              "🎓 I'm also an English language teacher, CELTA qualified, with experience teaching groups & 1 on 1 in France & the UK."
            }
          </div>
          <div className="mb-8 lg:mb-4">
            {
              '💪 Self-development: understanding that effective communication, structured goals & applied empathy are equally important from either side of a whiteboard, a career change, or a screen. '
            }
          </div>
          <div className="grid grid-cols-7 justify-between">
            <div className="mr-4 col-span-5">
              {
                '🚀 Through dedicated lessons & coaching, or as a bonus to ongoing collaboration, I can boost you & your team’s English communication, confidence & fluency.'
              }
            </div>
            <div className="flex flex-row col-start-6 col-end-8 justify-end items-center">
              <span className="bg-sky-600 py-4 px-2 rounded text-[0.8rem] font-sans lg:text-base font-bold hover:scale-110 hover:-translate-x-2 ease-in duration-[150ms] underline lg:no-underline hover:underline hover:cursor-pointer hover:bg-sky-900">
                Learn more...
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block py-2 w-full text-6xl bg-sky-700 duration-700 text-center lg:opacity-0 group-hover:opacity-100">
        <span className="opacity-0">*</span>
      </div>
    </section>
  );
}
