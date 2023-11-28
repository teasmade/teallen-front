import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import ReactSVG from '@/icons/svgs/ReactSVG';
import VueSVG from '@/icons/svgs/VueSVG';
import LaravelSVG from '@/icons/svgs/LaravelSVG';
import NodeSVG from '@/icons/svgs/NodeSVG';
import PostgresSVG from '@/icons/svgs/PostgresSVG';
import ApacheSVG from '@/icons/svgs/ApacheSVG';
import DockerSVG from '@/icons/svgs/DockerSVG';
import ShareSVG from '@/icons/svgs/iconscout/ShareSVG';
import ExchangeSVG from '@/icons/svgs/iconscout/Exchange';
import SoftSVG from '@/icons/svgs/iconscout/SoftSVG';
import FullSVG from '@/icons/svgs/iconscout/FullSVG';
import BackSVG from '@/icons/svgs/iconscout/BackSVG';
import FrontSVG from '@/icons/svgs/iconscout/FrontSVG';

export default function SkillContent({
  selectedSkill,
}: {
  selectedSkill: string;
}) {
  const t = useTranslations();

  const containerStyle =
    'xl:ml-12 2xl:ml-16 xl:mr-4 2xl:mr-36 relative flex items-center justify-center w-full h-full';
  const childStyle =
    'absolute w-full h-full flex items-start xl:items-center bottom-12 xl:bottom-0 justify-start pr-2 lg:pr-8 pt-8 xl:pt-0';

  const transition = {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  };

  const initialAndExit = { x: 300, opacity: 0 };
  const animate = { x: 0, opacity: 1 };

  return (
    <div className={containerStyle}>
      <AnimatePresence>
        {selectedSkill === 'initial' && (
          <>
            <motion.pre
              key="initial"
              initial={initialAndExit}
              animate={animate}
              exit={initialAndExit}
              transition={transition}
              className={
                childStyle +
                ' text-xs md:text-sm mb-8 xl:mb-0 xl:text-xl text-[#ffffff55] xl:w-1/8 xl:block -ml-28 sm:-ml-12 xl:ml-0 pt-12 xl:pt-8'
              }
            >
              {`
                     ,------------------,              ,---------,
                ,-------------------------,          ,"        ,"|
              ,"                        ,"|        ,"        ,"  |
            +--------------------------+  |      ,"        ,"    |
            | .----------------------. |  |     +---------+      |
            | |(dev)$                | |  |     | -==----'|      |
            | |                      | |  |     |         |      |
            | |                      | |  |/----|'---=    |      |
            | |                      | |  |   ,/|==== ooo |      ;
            | |                      | |  |  // |(((( [--]|    ,"
            | '----------------------' |," .;'| |((((     |  ,"
            +--------------------------+  ;;  | |         |,"     
                /_)________________(_/    '   | +---------+
           ______________________________  ',
          /  oooooooooooooooo  .o.  oooo /,  ",-------------
         / ==ooooooooooooooo==.o.  ooo= //   /'--{'')     ,"
        /_==__==========__==_ooo__ooo=_/'   /___{_)______,"
        '-----------------------------'
      `}
            </motion.pre>
          </>
        )}
        {selectedSkill === 'front' && (
          <motion.div
            key="front"
            initial={initialAndExit}
            animate={animate}
            exit={initialAndExit}
            transition={transition}
            className={childStyle}
          >
            <div className="text-justify text-sm xl:text-base">
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 font-mono">
                <FrontSVG
                  width="36"
                  height="36"
                  className="mr-2 inline"
                />
                {t('skills.front.title')}
              </h2>
              <p className="mb-2">{t('skills.front.p1')}</p>
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 flex items-center font-mono">
                <ReactSVG
                  width="36"
                  height="36"
                  className="mr-2 inline"
                />
                {t('skills.front.react_title')}
              </h2>
              <p className="mb-2">{t('skills.front.react_p1')}</p>
              <p className="mb-2">{t('skills.front.react_p2')}</p>
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 flex items-center font-mono">
                <VueSVG
                  width="36"
                  height="36"
                  className="mr-2 inline"
                />
                {t('skills.front.vue_title')}
              </h2>
              <p className="mb-2">{t('skills.front.vue_p1')}</p>
              <p className="mb-2">{t('skills.front.vue_p2')}</p>
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 flex items-center font-mono">
                <span className="text-4xl ml-1 mr-3 font-semibold">& </span>
                {t('skills.front.other_title')}
              </h2>
              <p className="mb-2">{t('skills.front.other_p1')}</p>
            </div>
          </motion.div>
        )}
        {selectedSkill === 'back' && (
          <motion.div
            key="back"
            initial={initialAndExit}
            animate={animate}
            exit={initialAndExit}
            transition={transition}
            className={childStyle}
          >
            <div className="text-justify text-sm xl:text-base">
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 font-mono">
                <BackSVG
                  width="36"
                  height="36"
                  className="mr-2 inline"
                />
                {t('skills.back.title')}
              </h2>
              <p className="mb-2">{t('skills.back.p1')}</p>
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 flex items-center font-mono">
                <LaravelSVG
                  width="36"
                  height="36"
                  className="mr-2 inline"
                />
                {t('skills.back.laravel_title')}
              </h2>
              <p className="mb-2">{t('skills.back.laravel_p1')}</p>
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 flex items-center font-mono">
                <NodeSVG
                  width="36"
                  height="36"
                  className="mr-2 inline"
                />
                {t('skills.back.node_title')}
              </h2>
              <p className="mb-2">{t('skills.back.node_p1')}</p>
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 flex items-center font-mono">
                <PostgresSVG
                  width="36"
                  height="36"
                  className="mr-2 inline"
                />
                {t('skills.back.postgres_title')}
              </h2>
              <p className="mb-2">{t('skills.back.postgres_p1')}</p>
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 flex items-center font-mono">
                <span className="text-4xl ml-1 mr-3 font-semibold">& </span>
                {t('skills.back.other_title')}
              </h2>
              <p className="mb-2">{t('skills.back.other_p1')}</p>
            </div>
          </motion.div>
        )}
        {selectedSkill === 'full' && (
          <motion.div
            key="full"
            initial={initialAndExit}
            animate={animate}
            exit={initialAndExit}
            transition={transition}
            className={childStyle}
          >
            <div className="text-justify text-sm xl:text-base">
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 font-mono">
                <FullSVG
                  width="36"
                  height="36"
                  className="mr-2 inline"
                />
                {t('skills.full.title')}
              </h2>
              <p className="mb-2">{t('skills.full.p1')}</p>
              <p className="mb-2">{t('skills.full.p2')}</p>
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 flex items-center font-mono">
                <ApacheSVG
                  width="36"
                  height="36"
                  className="mr-2 inline"
                />
                {t('skills.full.apache_title')}
              </h2>
              <p className="mb-2">{t('skills.full.apache_p1')}</p>
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 flex items-center font-mono">
                <DockerSVG
                  width="36"
                  height="36"
                  className="mr-2 inline"
                />
                {t('skills.full.docker_title')}
              </h2>
              <p className="mb-2">{t('skills.full.docker_p1')}</p>
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 flex items-center font-mono">
                <span className="text-4xl ml-1 mr-3 font-semibold">& </span>
                {t('skills.full.other_title')}
              </h2>
              <p className="mb-2">{t('skills.full.other_p1')}</p>
            </div>
          </motion.div>
        )}
        {selectedSkill === 'soft' && (
          <motion.div
            key="soft"
            initial={initialAndExit}
            animate={animate}
            exit={initialAndExit}
            transition={transition}
            className={childStyle}
          >
            <div className="text-justify text-sm xl:text-base">
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 font-mono">
                <SoftSVG
                  width="36"
                  height="36"
                  className="mr-2 inline"
                />
                {t('skills.soft.title')}
              </h2>
              <p className="mb-2">{t('skills.soft.p1')}</p>
              <p className="mb-2">{t('skills.soft.p2')}</p>
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 font-mono">
                <ExchangeSVG
                  width="36"
                  height="36"
                  className="mr-2 inline"
                />
                {t('skills.soft.title_2')}
              </h2>
              <p className="mb-2">{t('skills.soft.p3')}</p>
              <h2 className="text-xl lg:text-2xl mt-4 mb-2 font-mono">
                <ShareSVG
                  width="36"
                  height="36"
                  className="mr-2 inline"
                />
                {t('skills.soft.title_3')}
              </h2>
              <p className="mb-2">{t('skills.soft.p4')}</p>
              <p className="mb-2">{t('skills.soft.p5')}</p>
              <h2 className="text-xs mt-4 mb-2 font-mono">
                {t('skills.soft.title_4')}
                <span className="text-xs font-sans pl-2 mb-2">
                  {t('skills.soft.p6')}
                </span>
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
