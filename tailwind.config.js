/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "600px" },
      // => @media (max-width: 600px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }

      "2xl": { max: "1440px" },
      // => @media (max-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
