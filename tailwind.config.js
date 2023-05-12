/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': "#FF6600",
      "darkBlack": "#2B2B2B",
      "darkGray": "#5B5B5B",
      "white": "#ffff"
    },
    extend: {},
  },
  plugins: [],
}

