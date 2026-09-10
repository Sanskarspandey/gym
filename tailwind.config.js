/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iron: {
          950: '#060608',
          900: '#0a0a0d',
          850: '#101014',
          800: '#16161c',
          750: '#1d1d24',
          700: '#26262e',
          600: '#383842',
          500: '#52525e',
          400: '#71717e',
          300: '#a1a1aa',
          200: '#d4d4d8',
          100: '#f4f4f5',
          50: '#fafafa',
        },
        lime: {
          DEFAULT: '#CCFF00',
          accent: '#CCFF00',
          hover: '#b5e300',
          dim: '#8cb000',
          glow: 'rgba(204, 255, 0, 0.25)',
          muted: 'rgba(204, 255, 0, 0.12)',
        },
        charcoal: {
          DEFAULT: '#121215',
          light: '#1c1c22',
          border: '#2a2a33',
        }
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Oswald"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 15px rgba(204, 255, 0, 0.2)' },
          'to': { boxShadow: '0 0 30px rgba(204, 255, 0, 0.5)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dark-mesh': 'radial-gradient(at 0% 0%, rgba(204, 255, 0, 0.04) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(204, 255, 0, 0.03) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}
