/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#fffdf9',
        linen: '#fffcf6',
        sand: '#fdfaf7',
        stoneText: '#3f3a36',
        mutedText: '#81786f',
      },
      fontFamily: {
        sans: ['"KoPub Dotum"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"KoPub Dotum"', 'serif'],
        script: ['"Cormorant Garamond"', '"KoPub Dotum"', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(63, 58, 54, 0.12)',
      },
    },
  },
  plugins: [],
};
