/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./landings/**/*.html", "./assets/**/*.js"],
  theme: {
    extend: {
      colors:{
        green: '#d0fdd7',
        violet: '#EEDDF5',
        blue: '#DCEAF5',
      },
    },
  },
  plugins: [],
}

