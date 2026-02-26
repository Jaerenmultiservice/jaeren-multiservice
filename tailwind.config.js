/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Saira Condensed"', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#ff7a00',
        'dark': {
          DEFAULT: '#0d0d0d',
          card: '#161616',
          section: '#111111',
        },
      },
    },
  },
  plugins: [],
}
