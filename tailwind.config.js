/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        apple: {
          dark: '#000000',
          gray: '#1d1d1f',
          light: '#f5f5f7',
          blue: '#2997ff',
        }
      }
    },
  },
  plugins: [],
}
