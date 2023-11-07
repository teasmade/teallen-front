import { ReactNode } from 'react';
import Title from '@/components/content/Title';

export default function DeveloperLayout({ children }: { children: ReactNode }) {
  return (
    <main
      className={`pl-2 lg:pl-0 lg:pt-12 min-h-screen bg-gradient-to-r from-sky-600 via-sky-800 to-sky-900 text-white`}
    >
      <Title
        contentSection="Developer"
        sectionColor="sky"
      />
      <div className="mx-2 sm:mr-auto lg:ml-auto mt-4 sm:w-4/5 lg:w-3/5 2xl:w-5/12 2xl:mr-auto">
        <>{children}</>
      </div>
    </main>
  );
}
