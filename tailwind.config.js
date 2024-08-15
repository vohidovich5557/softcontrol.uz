/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navColor: '#7C797C',
        btnBlue: '#2C67EA',
        btnWhite: '#A0BFF0',
        bgBlack: '#012B4E',
        langWhite: '#F2F2F2',
        cardWhite: '#FAFAFA',
        cardBlue: '#F6FBFF',
      },
      container: {
        width: '1440px',
        center: true,
        padding: {
          'sm': '5px',
          'md': '10px',
          'lg': '0',
          'xl': '80px',
        }
      },
      screens: {
        'sm': '365px',
        'md': '768px',
        'lg': '992px',
        'xl': '1440px',
      }
    },
  },
  plugins: [],
}