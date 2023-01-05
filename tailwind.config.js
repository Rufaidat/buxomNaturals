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
    },
  },
  plugins: [],
};
