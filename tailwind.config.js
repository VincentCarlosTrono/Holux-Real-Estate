/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: "#294CC6",
        black: "#0E0E0E",
        darkblue: "#1D203E",
        lightgray: "#EEF1F4"
      }
    },
  },
  plugins: [],
}
