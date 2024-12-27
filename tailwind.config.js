/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/img/hero.jpg')",
      },
      colors: {
        primary: {
          light: "#C2FFC7",
          DEFAULT: "#9EDF9C",
          dark: "#62825D",
          darker: "#526E48",
        },
      },
    },
  },
  plugins: [],
};
