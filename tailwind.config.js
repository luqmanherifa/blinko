/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comfortaa", "sans-serif"],
        heading: ["Rajdhani", "sans-serif"],
      },
      colors: {
        indigonight: "#3D0066", // Dark Indigo Purple
        indigoflow: "#510087", // Mid Indigo Purple
        indigospark: "#5C0099", // Bright Indigo Purple
        yellowpulse: "#FDC500", // Strong Golden Yellow
        goldflash: "#FFD500", // Bright Gold Yellow
      },
    },
  },
  plugins: [],
};
