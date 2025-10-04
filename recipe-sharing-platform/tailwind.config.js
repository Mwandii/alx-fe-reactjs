/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'raleway' : ['"Raleway", sans-serif'],
        'nunito' : ['"Nunito", sans-serif'],
        'montserrat' : ['"Montserrat", sans-serif;']
      },
    },
  },
  plugins: [],
}

