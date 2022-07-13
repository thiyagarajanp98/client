module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
  },
  theme: {
    extend: {
      colors: {
        'dark-purple': '#081A51',
        'light-white': 'rgba(255,255,255,0.18)',
      },
      screens: {
        mobile: { min: '640px', max: '767px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        tablet: { min: '768px', max: '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        desktop: { min: '1024px', max: '1535px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
      },
    },
  },
  variants: {},
  plugins: [],
};
