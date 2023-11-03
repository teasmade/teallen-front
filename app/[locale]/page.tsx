import { Link } from '../../navigation';
import { useTranslations } from 'next-intl';
import IntroTitle from '@/components/home/IntroTitle';
import Skills from '@/components/home/Skills';
import BottomNav from '@/components/home/BottomNav';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className="text-white py-4 lg:pt-12 lg:h-screen min-h-screen flex flex-col items-center bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800">
      <div className="w-full flex-grow flex flex-col group">
        <IntroTitle />
        <Skills />
      </div>

      <div className="w-full lg:flex-grow flex flex-col">
        <BottomNav />
      </div>
    </main>
  );
}
