/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        red: {
          DEFAULT: 'hsl(14, 86%, 42%)',
          dark: '#a92b04'
        },
        green: 'hsl(159, 69%, 38%)',
        rose: {
          DEFAULT: 'hsl(14, 65%, 9%)',
          50: 'hsl(20, 50%, 98%)',
          100: 'hsl(13, 31%, 94%)',
          300: 'hsl(14, 25%, 72%)',
          400: 'hsl(7, 20%, 60%)',
          500: 'hsl(12, 20%, 44%)',
          900: 'hsl(14, 65%, 9%)',
        },
      },
      fontWeight: [400, 600, 700],
      fontFamily: {
        rht: ["Red Hat Text", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

