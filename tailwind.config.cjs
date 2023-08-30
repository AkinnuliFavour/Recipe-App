/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        'primary': '#8deb14',
        'secondary': '#a3ef43'
      }
    },
  },
  plugins: [],
};
