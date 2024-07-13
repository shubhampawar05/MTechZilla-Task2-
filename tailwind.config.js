/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveUpDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20px)' },
        },
      },
      animation: {
        moveUpDown: 'moveUpDown 0.2s infinite alternate ease-in-out',
      },
    
    },
  },
  plugins: [],
}