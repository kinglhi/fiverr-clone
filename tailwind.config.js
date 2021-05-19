const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content:  ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: colors.coolGray,
        primary: colors.green,
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')
  ],
};
