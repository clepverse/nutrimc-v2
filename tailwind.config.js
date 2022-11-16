/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/js/main.js'],
  theme: {
    extend: {
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       h1: {
      //         color: '#B4B4B4',
      //       },
      //       h2: {
      //         color: '#B4B4B4',
      //       },
      //       h3: {
      //         color: '#B4B4B4',
      //       },
      //       h4: {
      //         color: '#B4B4B4',
      //       },
      //     },
      //   },
      // },

      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    // ...
  ],
};
