/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rsR: ["RockSalt-Regular", "sans-serif"],
        ssBookD: ["Sequel-Sans-Book-Disp", "sans-serif"],
        ssLB: ["Sequel-Sans-Light-Body", "sans-serif"],
        ssSBH: ["Sequel-Sans-Semi-Bold-Head", "sans-serif"],
        ssBD: ["Sequel-Sans-Bold-Disp", "sans-serif"],
      },
    },
  },
  plugins: [],
};
