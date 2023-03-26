/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "d-green": "#03524C",
        "d-green-100": "#0a625b",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
