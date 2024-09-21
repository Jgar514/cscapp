module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
    
      colors: {
        holy: {
          50: '#E3F1FD',
          100: '#CCE4FA',
          200: '#99C9F4',
          300: '#66AEED',
          400: '#3393E7',
          500: '#5899E2',
          600: '#3A79C2',
          700: '#2C5B93',
          800: '#1D3C63',
          900: '#0F1E32',
        },
        pink: "#D93B86",  // Define the base pink color here
      },
    },
  },
  plugins: [],
};
