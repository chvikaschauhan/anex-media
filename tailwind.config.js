/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0a0a0c',
        violet: {
          DEFAULT: '#7c3aed',
          400: '#a78bfa',
          500: '#7c3aed',
        },
        electric: '#7c3aed',
        cyan: '#06b6d4',
      },
      boxShadow: {
        glow: '0 0 24px rgb(124 58 237 / 35%)',
        'glow-cyan': '0 0 24px rgb(6 182 212 / 30%)',
      },
    },
  },
  plugins: [],
}
