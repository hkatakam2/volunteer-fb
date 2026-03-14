/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        fb: {
          blue: '#1877F2',
          bg: '#F0F2F5',
          white: '#FFFFFF',
          dark: '#1C1E21',
        },
      },
    },
  },
  plugins: [],
}
