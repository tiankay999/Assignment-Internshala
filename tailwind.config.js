/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#171717',
          card: '#1f1f1f',
          cardHover: '#2a2a2a',
          border: '#363636',
          text: '#e4e4e4',
          textSecondary: '#a3a3a3',
        }
      }
    },
  },
  plugins: [],
}
