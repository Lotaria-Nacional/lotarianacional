/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter, serif",
      },
      colors: {
        LT_WHITE: "#FFFF",
        LT_BLACK: "#141414",
        LT_RED: {
          100: "#bd1717",
          200: "#951913",
        },
        LT_GRAY: {
          100: "#D7D7D7",
          200: "#3C3C3B",
          300: "#30302F",
        },
      },
    },
  },
  plugins: [],
}
