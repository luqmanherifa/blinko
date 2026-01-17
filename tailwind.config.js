/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      colors: {
        crimsondeep: "#880D1E",
        rosebold: "#DD2D4A",
        rosesoft: "#F26A8D",
        blushlight: "#F49CBB",
        aquamist: "#CBEEF3",
      },
    },
  },
  plugins: [],
};
