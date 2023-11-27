import { useTranslations } from 'next-intl';
import * as techSVGs from '@/icons/svgs/techSVGs';
import SoftSVG from '@/icons/svgs/iconscout/SoftSVG';
import ShareSVG from '@/icons/svgs/iconscout/ShareSVG';
import HistorySVG from '@/icons/svgs/iconscout/HistorySVG';

// Copilot: Explain typing
// SVGTechIconNames is a type that is the union of all the keys of the techSVGs object
type SVGTechIconNames = keyof typeof techSVGs;

// TechSVGProps is a type that has a property techNames that is an array of SVGTechIconNames
interface TechSVGProps {
  historyKey: string;
}

export default function HistoryItem({ historyKey }: TechSVGProps) {
  const t = useTranslations(`history.${historyKey}`);

  const historyTech = t('tech').split(',') as SVGTechIconNames[];

  const hasContentKey = (key: string) => {
    return t(key) !== `history.${historyKey}.${key}`;
  };

  const renderTechSVG = (techName: SVGTechIconNames) => {
    const SVGComponent = techSVGs[techName];
    return SVGComponent ? (
      <SVGComponent
        width="24"
        height="24"
        className="lg:scale-125"
      />
    ) : null;
  };

  return (
    <>
      <div className="mr-12 lg:mr-0 pr-8 pb-24 lg:m-x-8 border-r relative lg:w-[50%]">
        <span className="absolute top-[0.75rem] right-[-1px] border-t w-8"></span>
        <div>
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="font-mono font-semibold text-xl lg:text-2xl mb-2">
                {t('title')}
              </h2>
              <h3 className="font-mono font-semibold text-lg lg:text-xl">
                <SoftSVG
                  width="24"
                  height="24"
                  className="inline-block mr-2"
                />
                {t('role')}
              </h3>
              <h3 className="font-mono font-semibold text-lg lg:text-xl pb-4">
                <ShareSVG
                  width="24"
                  height="24"
                  className="inline-block mr-2"
                />
                {t('client')}
              </h3>
            </div>
            <span className="font-mono font-semibold text-base lg:text-xl">
              {t('dates')}
              <HistorySVG
                width="24"
                height="24"
                className="inline-block ml-4"
              />
            </span>
          </div>
          {(hasContentKey('content_1') && (
            <div className="lg:text-base pt-4">{t('content_1')}</div>
          )) ||
            null}
          {(hasContentKey('content_2') && (
            <div className="lg:text-base pt-4">{t('content_2')}</div>
          )) ||
            null}
          {(hasContentKey('content_3') && (
            <div className="lg:text-base pt-4">{t('content_3')}</div>
          )) ||
            null}
          {(hasContentKey('content_4') && (
            <div className="lg:text-base pt-4">{t('content_4')}</div>
          )) ||
            null}
        </div>
        <span className="absolute right-[-0.5rem] top-[8rem] rotate-90 origin-bottom-right">
          <span className="absolute -rotate-90 origin-top-left">
            {historyTech.map((techName) => (
              <div
                className="pb-1 lg:pb-3"
                key={techName}
              >
                {renderTechSVG(techName)}
              </div>
            ))}
          </span>
        </span>
      </div>
    </>
  );
}
