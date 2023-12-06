'use client';
import { useState, useEffect } from 'react';
import useReCaptcha from '@/app/utils/useReCaptcha';
import Script from 'next/script';

export default function Submit() {
  // const { reCaptchaLoaded, generateReCaptchaToken } = useReCaptcha();

  const [token, setToken] = useState('');
  const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  const generateReCaptchaToken = (action: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      // if (!reCaptchaLoaded) return reject(new Error('ReCaptcha not loaded A'));
      if (typeof window === 'undefined' || !window.grecaptcha) {
        // setReCaptchaLoaded(false);
        return reject(new Error('ReCaptcha not loaded B'));
      }
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_KEY, { action })
          .then((token: string) => {
            // localStorage.setItem(RECAPTCHA_TOKEN, token);
            resolve(token);
          });
      });
    });
  };

  // useEffect(() => {
  //   let ignore = false;
  //   const generateToken = async () => {
  //     console.log('Generating ReCaptcha token...');
  //     try {
  //       if (ignore) return;
  //       const newToken = await generateReCaptchaToken('formSubmit');
  //       console.log('Setting ReCaptcha token:');
  //       setToken(newToken);
  //     } catch (error) {
  //       console.error('Error generating ReCaptcha token:', error);
  //     }
  //   };

  //   // if (reCaptchaLoaded) {
  //   //   console.log('ReCaptcha initialized');
  //   //   generateToken();
  //   // }

  //   generateToken();
  //   return () => {
  //     ignore = true;
  //   };
  // }, []);

  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`}
        onLoad={async () => {
          setToken(await generateReCaptchaToken('formSubmit'));
        }}
      />
      <input
        type="hidden"
        name="_grcToken"
        value={token}
      ></input>
      <button
        className="btn bg-sky-950 border-none text-white w-1/3 w-full max-w-xs px-16 rounded-2xl rounded-tr-none rounded-bl-none lowercase text-xl hover:scale-110 ease-in duration-[150ms] hover:bg-sky-700"
        type="submit"
        disabled={!token}
      >
        SUBMIT GRC
      </button>
      <div>{token}</div>
    </>
  );
}
