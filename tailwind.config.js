/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs-fluid': 'clamp(0.75rem, 0.7rem + 0.3vw, 0.875rem)',
        'sm-fluid': 'clamp(0.875rem, 0.8rem + 0.4vw, 1rem)',
        'base-fluid': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'lg-fluid': 'clamp(1.125rem, 1rem + 0.6vw, 1.25rem)',
        'xl-fluid': 'clamp(1.25rem, 1.1rem + 0.8vw, 1.5rem)',
        '2xl-fluid': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        '3xl-fluid': 'clamp(2rem, 1.8rem + 1.2vw, 2.5rem)',
      }
    },
  },
  plugins: [],
}