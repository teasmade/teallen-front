'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function SkillCarouselClient({ field }: { field: string }) {
  const t = useTranslations(`${field}`);
  const skillsKeys = t('skillsKeys').split(',');
  const [currentSkill, setCurrentSkill] = useState(skillsKeys[0]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-full">
        {skillsKeys.map((skillKey: string) => {
          return (
            <div
              key={skillKey}
              className={
                (currentSkill === skillKey ? 'bg-sky-800' : 'bg-sky-600') +
                ' text-sm mr-2 border border-b-0 rounded-t hover:bg-sky-800'
              }
              onClick={() => setCurrentSkill(skillKey)}
            >
              <div className="px-2">{t(`skills.${skillKey}`)}</div>
            </div>
          );
        })}
      </div>
      <div className="text-base border rounded rounded-tl-none px-4 py-2">
        <div
          className="grid grid-cols-2"
          dangerouslySetInnerHTML={{
            __html: t.raw(`skillsDetails.${currentSkill}`),
          }}
        />
      </div>
    </div>
  );
}
