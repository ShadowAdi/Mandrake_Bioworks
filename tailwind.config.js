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
        'para-sm': 'clamp(0.75rem, 0.6rem + 0.12vw, 1rem)',    // 14px–16px
        'para-md': 'clamp(1rem, 0.875rem + 0.25vw, 1.25rem)',    // 16px–20px
        'para-lg': 'clamp(1.25rem, 1rem + 0.35vw, 1.5rem)',      // 20px–24px
        'para-xl': 'clamp(1.5rem, 1.2rem + 0.45vw, 2rem)',       // 24px–32px
        'para-2xl': 'clamp(2rem, 1.65rem + 0.6vw, 2.75rem)',      // 32px–44px

        // Subheadings
        'subheading-sm': 'clamp(1.25rem, 1.1rem + 0.25vw, 1.5rem)',       // ~20px–24px
        'subheading': 'clamp(1.375rem, 1.2rem + 0.35vw, 1.75rem)',        // ~22px–28px
        'subheading-md': 'clamp(1.5rem, 1.25rem + 0.4vw, 2rem)',          // ~24px–32px
        'subheading-lg': 'clamp(1.75rem, 1.4rem + 0.45vw, 2.25rem)',      // ~28px–36px
        'subheading-xl': 'clamp(2rem, 1.6rem + 0.5vw, 2.5rem)',           // ~32px–40px
        'subheading-2xl': 'clamp(2.25rem, 1.75rem + 0.6vw, 3rem)',        // ~36px–48px
        'subheading-3xl': 'clamp(2.75rem, 2.2rem + 0.75vw, 3.75rem)',

        // Headings
        'heading-sm': 'clamp(1.6rem, 1.3rem + 0.4vw, 2rem)',           // ~24px–32px
        'heading-md': 'clamp(2rem, 1.7rem + 0.5vw, 2.75rem)',          // ~32px–44px
        'heading-lg': 'clamp(2.75rem, 2.2rem + 0.6vw, 3.5rem)',        // ~44px–56px
        'heading-xl': 'clamp(3.5rem, 2.6rem + 0.8vw, 4.75rem)',        // ~56px–76px
        'heading-2xl': 'clamp(4.75rem, 3.5rem + 1.2vw, 7rem)',         // ~76px–112px
        'heading-3xl': 'clamp(6.25rem, 5rem + 2vw, 10.25rem)',

        // ~100px–164px
      },

      fontWeight: {
        heading: '600',
        paragraph: '300',
      }
    },
  },
  plugins: [],
}