/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B5ED7',
        'primary-dark': '#0848B0',
        'primary-light': '#EBF2FF',
        'text-dark': '#1A1A2E',
        'text-body': '#4A5568',
        border: '#E2E8F0',
        whatsapp: '#25D366',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
