/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3BB6BD",

          "secondary": "#F000B8",

          "accent": "#7c7c7c",

          "neutral": "#002F34",

          "base-100": "#FFFFFF",
          "base-200": "#F7F8F9",
          "base-300": "#EBEEEF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
