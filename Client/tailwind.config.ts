/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '20p': '20%',
        '70p': '70%',
        '30p': '30%',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
