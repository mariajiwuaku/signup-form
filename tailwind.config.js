/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "pale-navy": "#37394E",
        "dark-navy": "#242742",
        "light-gray": "#19182a40",
        "orange": "#ff6257",
      },
      fontFamily: {
        roboto: ["Robot", "sans-serif"],
      },
      fontSize: {
        xl: "clamp(40px, 5cqw, 56px)",
        base:"clamp(15px, 5cqw, 16px)",
      },
      boxShadow: {
        "3xl": "0 20px 40px -15px #ff6257",
      }
    },
  },
  plugins: ['tailwindcss'],
}

