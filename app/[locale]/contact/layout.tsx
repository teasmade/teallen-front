import { ReactNode } from 'react';
import Title from '@/components/content/Title';

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <main
      className={`pl-2 lg:pl-0 lg:pt-12 min-h-screen bg-gradient-to-r from-teal-800 via-teal-700 to-teal-600 text-white`}
    >
      <Title
        contentSection="Contact"
        sectionColor="teal"
      />
      <div className="mx-2 sm:mr-auto lg:ml-auto mt-4 sm:w-4/5 lg:w-3/5 2xl:w-5/12 2xl:mr-auto">
        <>{children}</>
      </div>
    </main>
  );
}
