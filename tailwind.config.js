/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          100: "var(--color-background-100)",
          200: "var(--color-background-200)",
        },

        logo: "var(--color-logo)",
      },
    },
  },
  plugins: [],
};
