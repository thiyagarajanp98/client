const AnimateCSS = require('animated-tailwindcss');

module.exports = AnimateCSS({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: '4.1px -5px 0 0 rgb(255, 255, 255)',
        myShadow2: '-4.1px -5px 0 0 rgb(255, 255, 255)',
      },
      colors: {
        'dark-purple': '#081A51',
        'light-white': 'rgba(255,255,255,0.18)',
      },
    },
  },
  variants: {},
  plugins: [],
});
