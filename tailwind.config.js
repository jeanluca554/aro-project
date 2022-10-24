module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
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

    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}