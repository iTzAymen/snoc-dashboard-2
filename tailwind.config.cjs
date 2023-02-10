/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
