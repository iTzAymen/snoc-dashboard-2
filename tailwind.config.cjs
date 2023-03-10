/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#e11d25",
        dark: "#212529",
        zinc: {
          850: "#242426",
        },
      },
      screens: {
        xs: "480px",
      },
      boxShadow: {
        "inner-1": "inset 0 1px 0px 0 rgba(0,0,0,0.1);",
      },

      animation: {
        fadein: "fadeIn 1s ease-in-out",
        fadeout: "fadeOut 1s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: 0, transform: "translate(-50%,-100%)" },
          "100%": { opacity: 1, transform: "translate(-50%,-50%)" },
        },
        fadeOut: {
          "0%": { opacity: 1, zIndex: 50 },
          "100%": { opacity: 0, zIndex: 0 },
        },
      }),
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
