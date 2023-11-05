/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        ct: "0 -35px 60px 3px rgba(243,239,17,0.6)",
      },
    },
  },
  plugins: [],
};
