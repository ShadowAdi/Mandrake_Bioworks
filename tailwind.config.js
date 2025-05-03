/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Paragraph sizes (360px – 2560px)
        'para-sm': 'clamp(0.875rem, 0.8rem + 0.25vw, 1rem)',      // 14px – 16px
        'para-md': 'clamp(1rem, 0.9rem + 0.35vw, 1.125rem)',       // 16px – 18px
        'para-lg': 'clamp(1.125rem, 1rem + 0.45vw, 1.375rem)',     // 18px – 22px
        'para-xl': 'clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem)',     // 20px – 26px
        // Subheading
        'subheading': 'clamp(1.375rem, 1.2rem + 0.7vw, 2rem)',     // 22px – 32px
        // Balanced Heading sizes (still larger than subheading but not overkill)
        'heading-sm': 'clamp(1.625rem, 1.4rem + 0.8vw, 2.25rem)',  // 26px – 36px
        'heading-md': 'clamp(2rem, 1.7rem + 1vw, 2.75rem)',        // 32px – 44px
        'heading-lg': 'clamp(2.25rem, 1.9rem + 1.2vw, 3.25rem)',   // 36px – 52px
        'heading-xl': 'clamp(2.5rem, 2.2rem + 1.4vw, 3.75rem)',    // 40px – 60px
      },
      fontWeight: {
        heading: '600',
        paragraph: '300',
      }
    },
  },
  plugins: [],
}