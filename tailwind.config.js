/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "up": "0px -4px 2px -1px rgba(0, 0, 0, 0.2)"
      }
    },
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
      },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
      },
        ".text-shadow": {
          "text-shadow": "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",

        }
      };
      addUtilities(newUtilities)
    }
  ],
}

