/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "skeleton-loading": {
          "0%": { 
            "background-color": "hsl(200, 20%, 80%)"
           },
          "100%": {
            "background-color": "hsl(200, 20%, 95%)"
          },
        },
      },
      animation: {
        "skeleton-loading": "skeleton-loading 1s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
