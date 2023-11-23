'use client';
import { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-2 lg:left-auto bottom-6 w-10 lg:w-12 h-10 lg:h-12 right-5 bg-sky-700 text-white p-2 rounded-full cursor-pointer hover:bg-sky-800 transition ease-in-out duration-400 text-xl font-bold"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
