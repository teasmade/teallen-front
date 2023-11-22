import { ReactNode } from 'react';
import Title from '@/components/content/Title';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main
      className={`pl-2 lg:pl-0 lg:pt-12 min-h-screen bg-gradient-to-r from-stone-300 via-stone-200 to-stone-50 text-neutral-600 lg:text-white`}
    >
      <Title
        contentSection="Blog"
        sectionColor="slate"
      />
      <div className="mx-2 sm:mr-auto lg:ml-auto mt-4 sm:w-4/5 lg:w-3/5 2xl:w-5/12 2xl:mr-auto text-neutral-900">
        <>{children}</>
      </div>
    </main>
  );
}
