/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bowlby: ["Bowlby One Sc", "cursive"],
        gothic: ["Didact Gothic", "sans-serrif"],
        tillana: ["Tillana", "cursive"],
      },
    },
  },
  plugins: [],
};
