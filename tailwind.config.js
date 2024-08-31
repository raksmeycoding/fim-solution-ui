/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add .jsx and .tsx to handle React components
  ],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
    },
    // screens: {
    //   "2xsm": "375px",
    //   xsm: "425px",
    //   "3xl": "2000px",
    //   ...defaultTheme.screens,
    // },
    extend: {},
  },
  plugins: [],
};
