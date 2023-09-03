/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlue: {
          DEFAULT: "#007ACC",
          dark: "#005B9E",
        },
        myOrange: "#F1C40F",
        myfoun: "#F9E79F",
        mybtn: "#06122E",

      },
      fontFamily: {
        custom: ['Nunito', 'sans'],
        roboto: ['Roboto', 'sans']
      },
    },
  },
  plugins: [],
}

