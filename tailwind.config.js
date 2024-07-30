/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit" , 
  theme: {
    extend: {
      colors: {
        primary: "#464b37",
        secondary: "#616751",
        light: "#e8ecdf",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      }
      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
  },
  },
  plugins: [],
};