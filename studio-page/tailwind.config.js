/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "120px",
    },
    extend: {
      fontFamily: {
        mono: ['"LeagueSpartan"'],
        sans: ['"Futura"'],
        serif: ['"PressStart2P"'],
      },
    },
    fontSize: {
      xs: ["16px", "21.25px"],
      sm: ["24px", "31.88px"],
      base: ["28px", "33.6px"],
      lg: ["20px", "26.5px"],
      xl: ["16px", "14.7px"],
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      blue: "#7ADEE6",
      orange: "#EF8C94",
      "dark-blue": "#14182E",
      pink: "#B12663",
      "dark-pink": "#8E1E4F",
      "press-pink": "#6A173B",
      gold: "#F5C053",
      purple: "#7803D5",
    },
  },
  plugins: [],
};
