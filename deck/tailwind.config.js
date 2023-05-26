/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: ['16px', '22.4px'],
      lg: ['16px', '20.8px'],
      xl: ['24px', '31.2px'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-roc-grotesk)'],
      },
    },
    colors: {
      transparent: "transparent",
      lightGreen: "#1EAA4D",
      green: "#1A8E41",
      darkGreen: "#17863C",
      fade: "#131313",
      white: "#FFFFFF",
      black: "#000000",
      grey: "#101010",
      light: '#B4B4B4'
    },
  },
  plugins: [],
};
