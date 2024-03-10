/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: {
          "dh-white": "#ddd",
        },
        "light-gray": {
          "dh-light-gray": "#d9d9d9",
        },
        black: {
          "dh-black": "#161616",
        },
        green: {
          "dh-green": "#72db31",
        },
        red: {
          "dh-red": " darkred",
        },
        light: {
          "dh-light": " salmon",
        },
        orange: {
          "dh-orange": "#e77236",
        },
        blue: {
          "dh-blue": "#326dee",
        },
        pink: {
          "dh-pink": "#ffd7ba",
        },
      },
      fontFamily: {
        chintzy: [Chintzy],
        comic: [Comic],
        "space-mono": ["Space Mono"],
        hanuman: [Hanuman],
        montserrat: [Montserrat],
      },
    },
  },
  plugins: [],
};
