/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {keyframes: {
      pulseOpacity: {
        '0%': { opacity: '0.5' },
        '50%': { opacity: '1' },
        '100%': { opacity: '0.5' },
      },
    },
    animation: {
      pulseOpacity: 'pulseOpacity 2s infinite',
    },},
  },
  plugins: [],
}