/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(250, 155, 13, 1)",
        primary2: "rgba(255, 255, 255, 1)",
        secondary: "rgba(250, 155, 13, 0)",
        shade: "rgb(220, 134, 5)",
        secondary2: "rgba(149, 149, 149, 1)",
        secondary3: "rgba(51, 46, 40, 1)",
        secondary4:  "rgba(250, 155, 13, 0.3)",
      }
    },
  },
  plugins: [],
}

