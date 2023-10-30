import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        slab: [
          '"Rockwell"',
          '"Rockwell Nova"',
          '"Roboto Slab"',
          '"DejaVu Serif"',
          '"Sitka Small"',
          '"serif"',
        ],
      },
      gridTemplateColumns: {
        // Simple 18 column grid to allow for 2 / 3 column layouts
        '18': 'repeat(18, minmax(0, 1fr))',
        home: '1fr, auto, 1fr, auto, 1fr',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
