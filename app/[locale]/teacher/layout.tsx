import { ReactNode } from 'react';
import Title from '@/components/content/Title';

export default function TeacherLayout({ children }: { children: ReactNode }) {
  return (
    <main
      className={`pl-2 lg:pl-0 lg:pt-12 min-h-screen bg-gradient-to-r from-sky-700 via-sky-900 to-sky-950 text-white`}
    >
      <Title
        contentSection="Teacher"
        sectionColor="sky_dark"
      />
      <div className="mx-2">
        <>{children}</>
      </div>
    </main>
  );
}
