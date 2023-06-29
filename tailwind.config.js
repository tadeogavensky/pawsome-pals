/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#172D13",
        "secondary": "#D76F30",
        "tertiary": "#6BB77B",

        
      },
    },
    fontFamily: {
      heading: ["Paytone One", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
