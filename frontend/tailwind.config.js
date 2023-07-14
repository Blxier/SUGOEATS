/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "#0d96f2",
      blue: "#1060ef",
      secondary: "#9E9E9E",
      accent: "#000000",
      "bg-color": "#E0E0E0",
      red: "#ff0000",
      grayesh: "#F3F4F6",
      gmail: "#c73840",
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1322px",
    },
    extend: {},
  },
  plugins: [],
};
