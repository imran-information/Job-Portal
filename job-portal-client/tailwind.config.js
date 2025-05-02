/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1967d2',
        secondary: '#f97316',
        light: '#f1f5f9',
        dark: '#0f172a',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

