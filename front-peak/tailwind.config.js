/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        trasparent: 'transparent',
        current: 'currentColor',
        bluePeak: '#1A3051',
        yellowPeak: '#D8C16F',
        greyPeak: '#919C9D'
      }
    },
  },
  plugins: [],
}
