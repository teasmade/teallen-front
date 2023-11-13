import { motion, AnimatePresence } from 'framer-motion';

export default function SkillContent({
  selectedSkill,
}: {
  selectedSkill: string;
}) {
  const containerStyle =
    'xl:ml-12 relative flex items-center justify-center w-full h-full';
  const childStyle =
    'absolute w-full h-full flex items-start xl:items-center bottom-12 xl:bottom-0 justify-start pr-12';

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
                ' text-xs md:text-sm mb-8 xl:mb-0 xl:text-xl text-[#ffffff55] xl:w-1/8 xl:block -ml-28 xl:ml-0'
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
            <div>
              <h2 className="text-2xl mb-4">I CAN DEV</h2>
              <p className="mb-4">
                I IS DEV Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Eaque ratione sint facere, nostrum ad magnam temporibus,
                dolore neque, magni quaerat voluptatum sequi reprehenderit qui
                reiciendis totam ipsa quis provident voluptatem! Hic, officia!
                Ducimus aut voluptas perspiciatis dicta corporis porro assumenda
                quibusdam voluptatibus fuga minima libero, quis in excepturi
                nostrum explicabo. Asperiores inventore voluptate eligendi fuga
                eius. Sapiente nam autem consequuntur! Sequi fugit eos,
                excepturi accusamus deleniti id unde ipsum reiciendis mollitia
                at hic iure quibusdam distinctio nobis possimus beatae ipsa
                perferendis natus numquam! Modi repellat nam quam in. Atque,
                sint! Dolorem deserunt dolor ratione ipsam nobis soluta
                voluptate possimus, odio maiores eius similique officia facilis
                voluptates sint veritatis beatae itaque consequatur, saepe rem.
                Natus porro reprehenderit mollitia suscipit corporis. Earum!
                Voluptatibus, enim nisi odio maiores, eveniet ex, qui inventore
                illo maxime sint voluptates? Reprehenderit totam repellat ex
                aliquam aperiam rem velit dignissimos! Beatae hic eius expedita
                ducimus. Dolorum, maxime mollitia?
              </p>
              <ul className="text-xl mb-4">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
              </ul>
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
            BACK Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            quod molestiae dolor eum officiis. BACK Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Saepe quod molestiae dolor eum
            officiis. BACK Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Saepe quod molestiae dolor eum officiis. BACK Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Saepe quod molestiae
            dolor eum officiis. BACK Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Saepe quod molestiae dolor eum officiis.
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
            quod molestiae dolor eum officiis. FULL Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Saepe quod molestiae dolor eum
            officiis. FULL Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Saepe quod molestiae dolor eum officiis. FULL Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Saepe quod molestiae
            dolor eum officiis. FULL Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Saepe quod molestiae dolor eum officiis.
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
            quod molestiae dolor eum officiis. SOFT Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Saepe quod molestiae dolor eum
            officiis. SOFT Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Saepe quod molestiae dolor eum officiis. SOFT Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Saepe quod molestiae
            dolor eum officiis. SOFT Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Saepe quod molestiae dolor eum officiis.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
