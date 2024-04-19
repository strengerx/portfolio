/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "proza": ["Proza Libre", "sans-serif"],
        "jose": ["Josefin Sans", "sans-serif"],
      },
      width: {
        "min/90": "min(90%,1200px)",
        "min/80": "min(80%,1200px)"
      }, height: {
        "svh/64": "calc(100svh - 64px)"
      }
    },
  },
  plugins: [],
}

