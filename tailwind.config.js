/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        custom :{
          'black' : '#07052F',
          'grey' : "#A5A5A5",
          'cyan' : "#29B7C5",
          'darkcyan' : '#0F8793',
          'dark' : '#443A3A'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
