/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./landings/**/*.{html,js}", 
    "./assets/**/*.js", 
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        azul: '#76bcf5',
        verde: '#69d6cc',
        lila: '#ad28ff',
        rosa: '#f729a6',
        rosado: '#f298a6',
        gris: '#b0b0b0',
        oro: '#fcf4dd',
        plata: '#f2f5ff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--azul': theme('colors.azul'),
          '--verde': theme('colors.verde'),
          '--lila': theme('colors.lila'),
          '--rosa': theme('colors.rosa'),
          '--rosado': theme('colors.rosado'),
          '--gris': theme('colors.gris'),
          '--oro': theme('colors.oro'),
          '--plata': theme('colors.plata'),
        },
      });
    },
  ],
};

