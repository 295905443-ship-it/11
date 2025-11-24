/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'museum-bg': '#F2F2F0', // Off-white Swiss style
        'museum-dark': '#1A1A1A', // Charcoal
        'museum-accent': '#C63D2F', // Torii Red muted
        'museum-stone': '#8C8C8C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
      animation: {
        'pulse-slow': 'pulse 20s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}