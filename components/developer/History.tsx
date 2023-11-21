import { useTranslations } from 'next-intl';
import ExpressSVG from '@/icons/svgs/ExpressSVG';
import NodeSVG from '@/icons/svgs/NodeSVG';
import LaravelSVG from '@/icons/svgs/LaravelSVG';
import PostgresSVG from '@/icons/svgs/PostgresSVG';
import VueSVG from '@/icons/svgs/VueSVG';
import HistoryItem from './HistoryItem';

export default function History() {
  const t = useTranslations('history');

  const historyItemKeys = t('keys').split(',');
  return (
    <>
      <div className="flex flex-col justify-center lg:items-center py-8 text-sm lg:text-xl">
        {historyItemKeys.length &&
          historyItemKeys.map((historyKey) => (
            <HistoryItem
              key={historyKey}
              historyKey={historyKey}
            />
          ))}
      </div>
    </>
  );
}
