/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fc',
          100: '#e1ecf9',
          200: '#c2daf3',
          300: '#94c0eb',
          400: '#5ea0de',
          500: '#3882cf',
          600: '#2567b5',
          700: '#1d5294',
          800: '#0e3465',
          900: '#002043', // Brand Core Navy
          950: '#00132b',
        },
        gold: {
          400: '#ffd838',
          500: '#ffca05',
          600: '#d9a700',
        },
        turf: {
          500: '#10b981',
          600: '#059669',
        }
      },
      fontFamily: {
        heading: ['var(--font-rajdhani)', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 32, 67, 0.06), 0 2px 6px -1px rgba(0, 32, 67, 0.04)',
        'card': '0 10px 30px -5px rgba(0, 32, 67, 0.08), 0 4px 10px -2px rgba(0, 32, 67, 0.04)',
        'hover': '0 20px 40px -8px rgba(0, 32, 67, 0.14), 0 8px 16px -4px rgba(0, 32, 67, 0.06)',
      }
    },
  },
  plugins: [],
};

