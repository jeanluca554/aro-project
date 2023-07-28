/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-poppins)',
      },
      colors: {
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#FF5300',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      boxShadow: {
        '3xl': '0 -3px 30px -8px rgba(0, 0, 0, 0.25)',
      }

    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
  },
}