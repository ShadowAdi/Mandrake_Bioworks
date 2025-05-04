/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Paragraphs
        'para-sm': 'clamp(0.875rem, 0.85rem + 0.1vw, 1rem)',        // 14px–16px, more gentle
        'para-md': 'clamp(1rem, 0.95rem + 0.15vw, 1.125rem)',       // 16px–18px
        'para-lg': 'clamp(1.125rem, 1.05rem + 0.2vw, 1.25rem)',     // 18px–20px
        'para-xl': 'clamp(1.25rem, 1.1rem + 0.25vw, 1.5rem)',       // 20px–24px

        // Subheading
        'subheading': 'clamp(1.375rem, 1.2rem + 0.35vw, 1.75rem)',  // 22px–28px

        // Headings (smoother)
        'heading-sm': 'clamp(1.625rem, 1.4rem + 0.4vw, 2rem)',      // 26px–32px
        'heading-md': 'clamp(2rem, 1.7rem + 0.5vw, 2.5rem)',        // 32px–40px
        'heading-lg': 'clamp(2.25rem, 2rem + 0.6vw, 3rem)',         // 36px–48px
        'heading-xl': 'clamp(2.5rem, 2.2rem + 0.7vw, 3.5rem)',      // 40px–56px
      },
      
      fontWeight: {
        heading: '600',
        paragraph: '300',
      }
    },
  },
  plugins: [],
}