module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },

      colors: {
        holy: {
          DEFAULT: '#5899E2',
          50: '#E3F1FD',
          100: '#CCE4FA',
          200: '#99C9F4',
          300: '#66AEED',
          400: '#3393E7',
          500: '#5899E2', // Base color
          600: '#3A79C2',
          700: '#2C5B93',
          800: '#1D3C63',
          900: '#0F1E32',
        },
      },
    },
  },
  plugins: [],
};