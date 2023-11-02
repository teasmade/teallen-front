import { Link } from '../../navigation';
import { useTranslations } from 'next-intl';
import DevSkillCard from '@/components/DevSkillCard';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className="text-white py-4 lg:pt-12 lg:h-screen min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
      <div className="w-full flex-grow flex flex-col group">
        <section className="flex flex-row lg:grid lg:grid-rows-none lg:grid-cols-7 justify-items-center pl-2 lg:pl-0 transition-all duration-600 ease-in-out hover:opacity-100">
          <span className="self-end lg:self-start lg:justify-self-start text-xl lg:text-4xl font-bold text-white lg:opacity-0 group-hover:opacity-100 duration-1000 ease-in-out 2xl:pl-8 lg:col-start-2 2xl:col-start-3">
            {t('title.hello')}
          </span>

          <h1 className="justify-self-start lg:justify-self-center relative text-3xl lg:text-7xl lg:col-start-4 font-extrabold text-white">
            <span className="absolute left-4 opacity-0 lg:opacity-100 group-hover:opacity-0 duration-300 ease-out">
              {t('title.initials')}
            </span>

            <span className="mx-2 lg:mx-0 justify-self-start lg:opacity-0 group-hover:opacity-100 duration-300 ease-out">
              {t('title.name')}
            </span>
          </h1>

          <span className="lg:justify-self-start self-end 2xl:justify-self-end text-xl lg:text-4xl font-bold 2xl:-ml-5 lg:pb-1 text-white lg:opacity-0 group-hover:opacity-100 duration-1000 ease-in-out lg:col-start-6 2xl:col-start-5 lg:col-span-2 2xl:col-auto">
            {t('title.and')}
          </span>
        </section>

        <nav className="w-full flex-grow flex flex-col justify-around lg:grid lg:grid-cols-home lg:justify-items-center mt-4 lg:mt-12 2xl:mt-36 items-start text-white font-bold transition-all duration-700 ease-in-out">
          <div className="hidden lg:block py-2 w-full text-6xl bg-blue-700 duration-700 text-center lg:opacity-0 group-hover:opacity-100">
            <span className="opacity-0">*</span>
          </div>
          <div className="text-4xl lg:text-6xl self-start lg:self-auto lg:relative pl-2 lg:px-6 lg:py-2 group/dev lg:group-hover:bg-blue-700 duration-700">
            <div className="lg:flex lg:flex-row-reverse flex flex-row justify-between bg-blue-700 lg:bg-transparent -ml-2 lg:ml-0">
              <span className="opacity-100 lg:group-hover:opacity-100 duration-1000 ease-in-out lg:group-hover:bg-blue-600 lg:group-hover/dev:bg-blue-800 lg:px-4 rounded">
                <span className="relative bottom-[3px] lg:bottom-[6px]">
                  {'</>'}
                </span>
              </span>
              <span className="lg:opacity-0 group-hover:opacity-100 duration-1000 ease-in-out lg:text-2xl lg:leading-tight xl:text-3xl 2xl:text-4xl text-3xl pr-4 font-mono pl-6 lg:pl-0">
                {t('dev.title')}
              </span>
            </div>
            <div className="text-sm lg:text-base lg:absolute mt-4 lg:mt-0 lg:left-0 pr-2 lg:px-8 lg:py-4 lg:rounded text-base lg:opacity-0 lg:group-hover/dev:opacity-100 lg:group-hover/dev:bg-blue-700 duration-700 ease-in-out font-mono">
              <div className="mb-4">
                {
                  "💡 I love the tech world's challenge of continuous learning, understanding dynamic contexts & new environments - it's what drove my career switch."
                }
              </div>
              <div className="mb-4">
                {
                  '💪 Self-development: widening & deepening my skillset, learning & collaborating, tackling problems & finding solutions across a wide range of projects & teams.'
                }
              </div>
              <div className="mb-4">
                {'🖥️ I have fullstack skills & project experience in:'}
              </div>
              <DevSkillCard />
            </div>
          </div>
          <div className="hidden lg:block py-2 w-full text-6xl bg-blue-700 text-center lg:opacity-0 group-hover:opacity-100 duration-700">
            <span className="opacity-0">*</span>
          </div>
          <div className="text-4xl lg:text-6xl self-end lg:self-auto lg:relative pl-2 lg:px-6 lg:py-2 pb-4 lg:block group/teach lg:group-hover:bg-blue-700 duration-700">
            <div className="lg:flex lg:flex-row flex flex-row justify-between bg-blue-700 lg:bg-transparent -ml-2 lg:ml-0">
              <span className="opacity-100 lg:group-hover:opacity-100 transition-all duration-1000 ease-in-out lg:group-hover:bg-blue-600 lg:group-hover/teach:bg-blue-800 lg:px-4 rounded">
                <span className="relative bottom-[3px] lg:bottom-[6px]">
                  <span className="text-4xl lg:text-5xl mx-1">en</span>
                  <span>/</span>
                  <span className="text-4xl lg:text-5xl mx-1">fr</span>
                </span>
              </span>
              <span className="lg:opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out lg:leading-tight lg:text-2xl xl:text-3xl 2xl:text-4xl text-3xl font-slab font-semibold tracking-wide pr-4 lg:pr-2 lg:pl-0 lg:ml-4">
                {t('teach.title')}
              </span>
            </div>
            <div className="lg:absolute mt-4 lg:mt-0 lg:left-0 pr-2 lg:px-8 lg:py-4 lg:rounded text-sm lg:text-base lg:opacity-0 lg:group-hover/teach:opacity-100 lg:group-hover/teach:bg-blue-700 duration-700 ease-in-out font-slab font-medium antialiased">
              <div className="mb-4">
                {
                  "🎓 I'm also an English language teacher, CELTA qualified, with experience teaching groups & 1 on 1 in France & the UK."
                }
              </div>
              <div className="mb-4">
                {
                  '💪 Self-development: understanding that effective communication, structured goals & applied empathy are equally important from either side of a whiteboard, a career change, or a screen. '
                }
              </div>
              {/* <div className="mb-4">
                {
                  'A teacher who understands being a student, like a developer who understands being a user, sees their work from a different perspective.'
                }
              </div> */}
              <div className="grid grid-cols-7 justify-between">
                <div className="mr-4 col-span-5">
                  {
                    '🚀 Through dedicated lessons & coaching, or as a bonus to ongoing collaboration, I can boost you & your team’s English communication, confidence & fluency.'
                  }
                </div>
                <div className="flex flex-row col-start-6 col-end-8 justify-end items-center">
                  <span className="bg-blue-600 py-4 px-2 rounded text-sm font-bold hover:scale-110 hover:-translate-x-2 ease-in duration-[150ms] hover:underline hover:cursor-pointer">
                    Learn more...
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block py-2 w-full text-6xl bg-blue-700 duration-700 text-center lg:opacity-0 group-hover:opacity-100">
            <span className="opacity-0">*</span>
          </div>
        </nav>
      </div>

      <div className="w-full lg:flex-grow flex flex-col">
        <nav className="w-full flex-grow flex flex-row justify-between lg:grid lg:grid-cols-18 pr-2 lg:pr-0 items-end justify-items-end lg:justify-items-center lg:items-start text-white font-bold">
          <div className="pl-2 lg:col-start-1 lg:col-end-5 lg:order-none text-xl lg:text-2xl lg:self-end pb-4 lg:pb-8">
            <Link
              className=""
              href="/blog"
            >
              <span className="underline lg:no-underline lg:hover:underline">
                blog
              </span>
              <span> 📜</span>
            </Link>
          </div>
          <div className="lg:col-start-8 lg:col-end-12 text-xl lg:text-2xl lg:self-end pb-4 lg:pb-8">
            <Link
              className=""
              href="/contact"
            >
              <span className="underline lg:no-underline lg:hover:underline">
                contact
              </span>
              <span> 📡</span>
            </Link>
          </div>
          <div className="lg:col-start-15 lg:col-end-18 text-xl lg:text-2xl lg:self-end pb-4 lg:pb-8 -ml-5">
            <Link
              className=""
              href="/essentials"
            >
              <span className="underline lg:no-underline lg:hover:underline">
                hiring managers
              </span>
              <span> 👋</span>
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
