/** @type {import('tailwindcss').Config} */
import colors from './tailwindcss/colors.js';
import theaming from './tailwindcss/plugins/theaming.js';
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      albert: ['Albert Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        ...colors,
      },
      fontSize: {
        sm: ['14px', { lineHeight: '21px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '27px' }],
        '4xl': ['36px', { lineHeight: '43px' }],
      },
    },
  },
  plugins: [theaming, require('@tailwindcss/forms')],
};
