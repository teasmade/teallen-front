export default function SkillContent({
  selectedSkill,
}: {
  selectedSkill: string;
}) {
  return (
    <div className="grid grid-cols-5">
      <pre
        className={
          selectedSkill === 'initial'
            ? 'font-mono text-[16px] scale-x-[1.3] opacity-40 transition-all ease-in duration-[150ms]'
            : 'font-mono text-[16px] opacity-0 scale-0 transition-all ease-in duration-[150ms]'
        }
      >
        {/* <pre className="font-mono text-[16px] scale-x-[1.3] opacity-40 order-last"> */}
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
      </pre>
      <div
        className={
          selectedSkill === 'front'
            ? 'order-first scale-100 opacity-100 transition-all ease-in duration-[150ms]'
            : 'scale-0 opacity-0 transition-all ease-in duration-[150ms]'
        }
      >
        FRONT Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
        quod molestiae dolor eum officiis. Voluptatum quo doloremque ducimus
        deserunt libero.
      </div>
      <div
        className={
          selectedSkill === 'back'
            ? 'order-first scale-100 opacity-100 transition-all ease-in duration-[150ms]'
            : 'scale-0 opacity-0 transition-all ease-in duration-[150ms]'
        }
      >
        BACK Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
        quod molestiae dolor eum officiis. Voluptatum quo doloremque ducimus
        deserunt libero.
      </div>
      <div
        className={
          selectedSkill === 'full'
            ? 'order-first scale-100 opacity-100 transition-all ease-in duration-[150ms]'
            : 'scale-0 opacity-0 transition-all ease-in duration-[150ms]'
        }
      >
        FULL Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
        quod molestiae dolor eum officiis. Voluptatum quo doloremque ducimus
        deserunt libero.
      </div>
      <div
        className={
          selectedSkill === 'soft'
            ? 'order-first scale-100 opacity-100 transition-all ease-in duration-[150ms]'
            : 'scale-0 opacity-0 transition-all ease-in duration-[150ms]'
        }
      >
        SOFT Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
        quod molestiae dolor eum officiis. Voluptatum quo doloremque ducimus
        deserunt libero.
      </div>
    </div>
  );
}
