/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fi: {
          50: '#FAF5FF',
          100: '#F3EEFE',
          200: '#E9DFFC',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A8',
          900: '#4A15D1',
          950: '#2A0878',
          brand: '#4A15D1',
          accent: '#10B981',
          surface: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Geist', 'var(--font-geist-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"Geist Mono"', 'var(--font-geist-mono)', 'monospace'],
      },
      boxShadow: {
        'fi-card': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'fi-hover': '0 12px 24px -6px rgba(74, 21, 209, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.04)',
        'fi-dock': '0 10px 30px -5px rgba(0, 0, 0, 0.15), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
        'fi-modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
