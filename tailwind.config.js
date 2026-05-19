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
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif KR"', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(63, 58, 54, 0.12)',
      },
    },
  },
  plugins: [],
};
