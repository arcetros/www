/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
    './_content/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#272744',
        'primary-accent': '#272744',
        'primary-1': '#494d7e',
        'primary-2': '#8b6d9c',
        'primary-3': '#c69fa5',
        'primary-4': '#f2d3ab',
        'primary-5': '#fbf5ef'
      }
    }
  },
  plugins: []
}
