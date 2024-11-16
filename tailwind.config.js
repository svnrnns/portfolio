/** @type {import('tailwindcss').Config} */
import colors from './tailwindcss/colors.js';
import theaming from './tailwindcss/plugins/theaming.js';
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      albert: ['Albert Sans', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        ...colors,
      },
      fontSize: {
        xxs: ['10px', { lineHeight: '15px' }],
        xs: ['12px', { lineHeight: '18px' }],
        sm: ['14px', { lineHeight: '21px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '27px' }],
        xl: ['20px', { lineHeight: '30px' }],
        '2xl': ['24px', { lineHeight: '28.8px' }],
        '2.5xl': ['28px', { lineHeight: '33.6px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '43.2px' }],
        '5xl': ['48px', { lineHeight: '57.6px' }],
        '6xl': ['60px', { lineHeight: '72px' }],
        '7xl': ['72px', { lineHeight: '86.4px' }],
        '8xl': ['96px', { lineHeight: '115.2px' }],
        '9xl': ['128px', { lineHeight: '153.6px' }],
      },
    },
  },
  plugins: [theaming, require('@tailwindcss/forms')],
};
