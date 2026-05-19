/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#fffdf9',
        linen: '#f7f2ec',
        sand: '#e6d9c9',
        stoneText: '#3f3a36',
        mutedText: '#81786f',
      },
      fontFamily: {
        sans: ['"KoPub Dotum"', 'system-ui', 'sans-serif'],
        serif: ['"KoPub Dotum"', 'system-ui', 'sans-serif'],
        script: ['"Chalisa Oktavia"', 'cursive'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(63, 58, 54, 0.12)',
      },
    },
  },
  plugins: [],
};
