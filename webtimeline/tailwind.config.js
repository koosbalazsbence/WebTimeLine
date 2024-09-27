/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monsterrat: ['"Montserrat"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

