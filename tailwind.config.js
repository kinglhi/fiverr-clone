const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: colors.coolGray,
        primary: colors.green,
      },
    },
  },
  variants: {},
  plugins: [],
};
