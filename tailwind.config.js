/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'lavender': {
          50: '#faf8fc',
          100: '#f4f0f8',
          200: '#e8d8f6',
          300: '#d7bce8',
          400: '#c29bd6',
          500: '#a87bc4',
          600: '#8f5fac',
          700: '#744c8c',
          800: '#5f3e72',
          900: '#4f345e',
        },
        // Dark mode colors
        'dark-primary': '#371a3a',
        'dark-secondary': '#03061c',
        'dark-tertiary': '#0f172a',
        'dark-accent': '#6b46c1',
        'dark-hover': '#8b5cf6',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #371a3a 0%, #03061c 50%, #0f172a 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-in-out',
        'bounce-in': 'bounceIn 0.5s ease-in-out',
        'lift': 'lift 0.3s ease-in-out',
        'pulse-hover': 'pulseHover 0.3s ease-in-out',
        'confetti': 'confetti 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        lift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-8px)' },
        },
        pulseHover: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        confetti: {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(360deg)', opacity: '0' },
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 