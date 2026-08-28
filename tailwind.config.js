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
        neo: {
          yellow: '#FFE600',
          orange: '#FF8A00',
          green: '#10B981',
          lime: '#84CC16',
          cyan: '#06B6D4',
          purple: '#8B5CF6',
          pink: '#EC4899',
          cream: '#FDFBF7',
          canvas: '#F4EFE6',
          dark: '#121212',
          darkSurface: '#1C1C1E',
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
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Poppins', 'sans-serif'],
        display: ['Outfit', 'Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'neo-sm': '2px 2px 0px 0px #000',
        'neo': '4px 4px 0px 0px #000',
        'neo-md': '6px 6px 0px 0px #000',
        'neo-lg': '8px 8px 0px 0px #000',
        'neo-xl': '12px 12px 0px 0px #000',
        'neo-dark-sm': '2px 2px 0px 0px #FFE600',
        'neo-dark': '4px 4px 0px 0px #FFE600',
        'neo-dark-white': '4px 4px 0px 0px #FFFFFF',
        'neo-dark-md': '6px 6px 0px 0px #FFE600',
        'neo-dark-lg': '8px 8px 0px 0px #FFE600',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
