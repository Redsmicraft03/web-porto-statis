/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        soft: {
          orange: '#f97316',
          pink: '#ec4899',
          purple: '#8b5cf6',
          green: '#34d399',
          yellow: '#fbbf24',
          cyan: '#06b6d4',
          cream: '#fff7ed',
          dark: '#121118',
          darkSurface: '#1a1921',
          border: 'rgba(0, 0, 0, 0.75)',
          borderLight: 'rgba(0, 0, 0, 0.35)',
        },
        neo: {
          yellow: '#fbbf24',
          orange: '#f97316',
          green: '#34d399',
          lime: '#84cc16',
          cyan: '#06b6d4',
          purple: '#8b5cf6',
          pink: '#ec4899',
          cream: '#fff7ed',
          canvas: '#fef2f2',
          dark: '#121118',
          darkSurface: '#1a1921',
          black: '#000000',
        },
        bear: {
          50: '#FAF6F0',
          100: '#F4ECE1',
          200: '#E8D7C3',
          300: '#DAC0A3',
          400: '#C8A27A',
          500: '#B08253',
          600: '#8F6239',
          700: '#6E4727',
          800: '#4D3019',
          900: '#321D0E',
          950: '#1D1007',
        }
      },
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Poppins', 'Outfit', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '3px 3px 0 0 rgba(0,0,0,0.15)',
        'soft': '6px 6px 0 0 rgba(0,0,0,0.2)',
        'soft-md': '6px 6px 0 0 rgba(0,0,0,0.35)',
        'soft-lg': '8px 8px 0 0 rgba(0,0,0,0.25)',
        'soft-xl': '12px 12px 0 0 rgba(0,0,0,0.3)',
        'soft-dark-sm': '3px 3px 0 0 rgba(255,255,255,0.2)',
        'soft-dark': '6px 6px 0 0 rgba(255,255,255,0.25)',
        'soft-dark-orange': '6px 6px 0 0 rgba(249,115,22,0.4)',
        'soft-dark-pink': '6px 6px 0 0 rgba(236,72,153,0.4)',
        'neo-sm': '3px 3px 0 0 rgba(0,0,0,0.2)',
        'neo': '6px 6px 0 0 rgba(0,0,0,0.25)',
        'neo-md': '6px 6px 0 0 rgba(0,0,0,0.35)',
        'neo-lg': '8px 8px 0 0 rgba(0,0,0,0.3)',
        'neo-xl': '12px 12px 0 0 rgba(0,0,0,0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
