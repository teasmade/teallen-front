import { ReactNode } from 'react';
import Title from '@/components/content/Title';
import Script from 'next/script';
// import Head from 'next/head';

export default function ContactLayout({ children }: { children: ReactNode }) {
  const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  return (
    <>
      {/* <Head>
        <link
          rel="preconnect"
          href="https://www.google.com"
        />
        <link
          rel="preconnect"
          href="https://www.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head> */}
      <main
        className={`pl-2 lg:pl-0 lg:pt-12 min-h-screen bg-gradient-to-r from-sky-800 via-sky-900 to-sky-950 text-white`}
      >
        <Title
          contentSection="Contact"
          sectionColor="sky_darker"
        />
        <div className="mx-2 sm:mr-auto lg:ml-auto mt-4 sm:w-4/5 lg:w-3/5 2xl:w-5/12 2xl:mr-auto pb-16">
          <>{children}</>
        </div>
      </main>
      {/* <Script
        async
        strategy="beforeInteractive"
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`}
      /> */}
    </>
  );
}
