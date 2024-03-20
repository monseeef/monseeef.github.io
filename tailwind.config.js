/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#ff9142",
        gray: {
          700: "#4a5568",
        },
        blue: {
          800: "#2c5282",
        },
      },
      boxShadow: {
        "text-shadow": "1px 1px 2px rgba(0,0,0,0.10)",
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      syne: ["Syne", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    // Enables backdrop-filter utility if not already available by default
    require("tailwindcss-filters"),
  ],
};
