const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./atoms/**/*.{js,ts,jsx,tsx}",
    "./molecules/**/*.{js,ts,jsx,tsx}",
    "./organisms/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Merriweather Sans", ...defaultTheme.fontFamily.sans],
        fancy: ["DM Serif Display"],
      },
      colors: {
        green: "#11452c",
        gold: "#cd8e33",
      },
      // backgroundImage: (theme) => ({
      //   "hero-pattern":
      //     "linear-gradient(to right bottom, rgba(17 69 44,0.8),rgb(17 69 44)), url('../atoms/img_7654.jpg')",
      // }),
    },
  },
  plugins: [],
};
