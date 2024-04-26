/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    screens: {
      'sm': '400px',
      'md': '850px',
      'lg': '1200px',
      'xl': '1600px',
      '2xl': '2000px',
    },
    extend: {
      colors: {
        "fade": "var(--fade)",
        "var-menuCard": "var(--menuCard)",
      }
    },
  },
  plugins: [],
}

