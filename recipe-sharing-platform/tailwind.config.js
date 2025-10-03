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
        poppins: ["Cormorant Garamond", serif],
      },
    },
  },
  plugins: [],
}

