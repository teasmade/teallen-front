import { motion, AnimatePresence } from 'framer-motion';

export default function SkillContent({
  selectedSkill,
}: {
  selectedSkill: string;
}) {
  const containerStyle =
    'ml-12 relative flex items-center justify-center w-full h-full';
  const childStyle = 'absolute w-full h-full flex items-center justify-start';

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
          <motion.pre
            key="initial"
            initial={initialAndExit}
            animate={animate}
            exit={initialAndExit}
            transition={transition}
            className={childStyle + ' text-xl text-[#ffffff55] w-3/4'}
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
            FRONT Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Saepe quod molestiae dolor eum officiis.
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
            BACK Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            quod molestiae dolor eum officiis.
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
            FULL Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            quod molestiae dolor eum officiis.
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
            SOFT Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            quod molestiae dolor eum officiis.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
