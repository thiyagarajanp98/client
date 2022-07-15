const AnimateCSS = require('animated-tailwindcss');

module.exports = AnimateCSS({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#081A51',
        'light-white': 'rgba(255,255,255,0.18)',
      },
    },
  },
  variants: {},
  plugins: [],
});
