'use client';

import BackSVG from '@/icons/svgs/iconscout/BackSVG';
import FrontSVG from '@/icons/svgs/iconscout/FrontSVG';
import FullSVG from '@/icons/svgs/iconscout/FullSVG';
import SoftSVG from '@/icons/svgs/iconscout/SoftSVG';
import SkillContent from './SkillContent';

import { useState } from 'react';

export default function SkillDetails() {
  const [selectedSection, setSelectedSection] = useState('initial');

  const onSelectSection = (sectionName: string) => {
    if (selectedSection === sectionName) {
      setSelectedSection('initial');
    } else {
      setSelectedSection(sectionName);
    }
  };

  return (
    <>
      <div className="flex flex-col items-start xl:items-stretch xl:flex-row">
        {/* Sidebar */}
        <div className="flex flex-row flex-wrap sm:flex-nowrap xl:flex-col xl:gap-0 origin-left scale-[0.7] sm:scale-[0.8] md:scale-[0.9] xl:scale-100">
          {/* Btn-Front */}
          <div
            className={
              'w-fit border-t border-r border-l hover:border-b border-b xl:border-b-0 border-white rounded-tl-3xl hover:scale-110 origin-top xl:origin-top-left transition-scale ease-in duration-200 basis-6/12' +
              (selectedSection === 'front' ? ' bg-sky-500' : ' bg-sky-700')
            }
          >
            <button
              onClick={() => onSelectSection('front')}
              className={
                `w-full border-t border-l border-r border-b border-transparent hover:border-white hover:rounded-br-3xl rounded-tl-3xl sm:p-2 xl:p-4 hover:bg-sky-800 hover:scale-110 xl:hover:translate-x-2 hover:translate-y-2 origin-top xl:origin-top-left transition-scale ease-in duration-200` +
                (selectedSection === 'front' ? ' bg-sky-500' : ' bg-sky-700')
              }
            >
              <div className="flex flex-row justify-around w-32">
                <FrontSVG
                  width="72"
                  height="72"
                />
              </div>
              <p className="mt-4 font-mono">frontend</p>
            </button>
          </div>

          {/* Btn-Back */}
          <div
            className={
              'w-fit border-l border-r border-t hover:border-b border-b xl:border-b-0 border-white hover:scale-110 origin-top xl:origin-top-left transition-scale ease-in duration-200 basis-6/12' +
              (selectedSection === 'back' ? ' bg-sky-500' : ' bg-sky-700')
            }
          >
            <button
              onClick={() => onSelectSection('back')}
              className={
                'w-full border-l border-r border-t hover:border-b border-transparent hover:border-white hover:rounded-br-3xl sm:p-2 xl:p-4 hover:bg-sky-800 hover:scale-110 xl:hover:translate-x-2 hover:translate-y-2 origin-top xl:origin-top-left transition-scale ease-in duration-200' +
                (selectedSection === 'back' ? ' bg-sky-500' : ' bg-sky-700')
              }
            >
              <div className="flex flex-row justify-around w-32">
                <BackSVG
                  width="72"
                  height="72"
                />
              </div>
              <p className="mt-4 font-mono">backend</p>
            </button>
          </div>

          {/* Btn-Full */}
          <div
            className={
              'w-fit border-l border-r border-t hover:border-b border-b xl:border-b-0 border-white hover:scale-110 origin-top xl:origin-top-left transition-scale ease-in duration-200 basis-6/12' +
              (selectedSection === 'full' ? ' bg-sky-500' : ' bg-sky-700')
            }
          >
            <button
              onClick={() => onSelectSection('full')}
              className={
                'w-full border-l border-r border-t hover:border-b border-transparent hover:border-white hover:rounded-br-3xl sm:p-2 xl:p-4 hover:bg-sky-800 hover:scale-110 xl:hover:translate-x-2 hover:translate-y-2 origin-top xl:origin-top-left transition-scale ease-in duration-200' +
                (selectedSection === 'full' ? ' bg-sky-500' : ' bg-sky-700')
              }
            >
              <div className="flex flex-row justify-around w-32">
                <FullSVG
                  width="72"
                  height="72"
                />
              </div>
              <p className="mt-4 font-mono">fullstack</p>
            </button>
          </div>

          {/* Btn-Soft */}
          <div
            className={
              'w-fit border-t border-l border-r border-b border-white border-b hover:scale-110 origin-top xl:origin-top-left transition-scale ease-in duration-200 basis-6/12 rounded-br-3xl xl:rounded-br-none' +
              (selectedSection === 'soft' ? ' bg-sky-500' : ' bg-sky-700')
            }
          >
            <button
              onClick={() => onSelectSection('soft')}
              className={
                'w-full border-t border-l border-r hover:border-b border-transparent hover:border-white sm:p-2 xl:p-4 hover:bg-sky-800 hover:scale-110 xl:hover:translate-x-2 hover:translate-y-2 hover:rounded-br-3xl origin-top xl:origin-top-left transition-scale ease-in duration-200 rounded-br-3xl xl:rounded-br-none' +
                (selectedSection === 'soft' ? ' bg-sky-500' : ' bg-sky-700')
              }
            >
              <div className="flex flex-row justify-around w-32">
                <SoftSVG
                  width="72"
                  height="72"
                />
              </div>
              <p className="mt-4 font-mono">softskills</p>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-24 border-none xl:border-solid xl:mt-0 w-full h-80 xl:h-auto border-r border-t border-b rounded-br-3xl flex flex-row items-center justify-center">
          <SkillContent selectedSkill={selectedSection} />
        </div>
      </div>
    </>
  );
}
