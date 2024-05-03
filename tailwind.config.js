/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-app': "url('/src/assets/bg-naruto.jpg')",
        'bg-pergaminho': "url('/src/assets/bg-pergaminho.jpg')",
      }
    },
  },
  plugins: [],
}

