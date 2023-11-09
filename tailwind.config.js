/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dots: ["Codystar", "sans-serif"],
      },
      animation: {
        loader: "s1 1s infinite",
      },

      keyframes: {
        s1: {
          "0%": {transform: "rotate(-180deg)"},
        },
      },
    },
  },
  plugins: [],
};
