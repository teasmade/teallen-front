import { use, useEffect, useState } from 'react';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const showBadge = () => {
  if (!window.grecaptcha) return;
  window.grecaptcha.ready(() => {
    const badge = document.getElementsByClassName(
      'grecaptcha-badge'
    )[0] as HTMLElement;
    if (!badge) return;
    badge.style.display = 'block';
    badge.style.zIndex = '1';
  });
};

const hideBadge = () => {
  if (!window.grecaptcha) return;
  window.grecaptcha.ready(() => {
    const badge = document.getElementsByClassName(
      'grecaptcha-badge'
    )[0] as HTMLElement;
    if (!badge) return;
    badge.style.display = 'none';
  });
};

const useReCaptcha = (): {
  reCaptchaLoaded: boolean;
  generateReCaptchaToken: (action: string) => Promise<string>;
} => {
  const [reCaptchaLoaded, setReCaptchaLoaded] = useState(false);
  const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  // Load ReCaptcha script
  useEffect(() => {
    if (!RECAPTCHA_KEY || typeof window === 'undefined' || reCaptchaLoaded)
      return;

    const scriptId = 'recaptcha-script';
    const existingScript = document.getElementById(scriptId);

    if (window.grecaptcha || existingScript) {
      showBadge();
      setReCaptchaLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`;
    script.addEventListener('load', () => {
      setReCaptchaLoaded(true);
      showBadge();
    });
    document.body.appendChild(script);
  }, [reCaptchaLoaded]);

  useEffect(() => {
    hideBadge(), [];
  });

  // Get token
  const generateReCaptchaToken = (action: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!reCaptchaLoaded) return reject(new Error('ReCaptcha not loaded A'));
      if (typeof window === 'undefined' || !window.grecaptcha) {
        setReCaptchaLoaded(false);
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

  return { reCaptchaLoaded, generateReCaptchaToken };
};

export default useReCaptcha;
