/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-ridder-blue',
    'text-ridder-blue',
    'border-ridder-blue',
    'bg-ridder-blue/10',
    'bg-ridder-blue/20',
    'bg-ridder-blue/5',
    'border-ridder-blue/20',
    'border-ridder-blue/30',
    'border-ridder-blue/40',
    'text-ridder-grey',
    'text-ridder-teal',
    'bg-ridder-teal',
  ],
  theme: {
    extend: {
      colors: {
        // RIDDER Brand Colors
        ridder: {
          blue: '#1e3a5f',      // Dark blue for "RID"
          'blue-light': '#2d4a6f',
          'blue-dark': '#0f2538',
          teal: '#14b8a6',      // Teal/turquoise for "DER"
          'teal-light': '#5eead4',
          'teal-dark': '#0d9488',
          grey: '#4b5563',      // Dark grey for secondary text
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-ridder': 'linear-gradient(135deg, #1e3a5f 0%, #14b8a6 100%)',
        'gradient-ridder-reverse': 'linear-gradient(135deg, #14b8a6 0%, #1e3a5f 100%)',
        'gradient-radial': 'radial-gradient(circle, #14b8a6 0%, #1e3a5f 100%)',
      },
    },
  },
  plugins: [],
}

