/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        'red': 'rgb(252,71,71)',
        'dark-blue': 'rgb(16,20,30)',
        'grey-blue': 'rgb(90,105,143)',
        'semi-dark-blue': 'rgb(22,29,47)',
        'white': '#fff'
      }
    },
  },
  plugins: [],
}

