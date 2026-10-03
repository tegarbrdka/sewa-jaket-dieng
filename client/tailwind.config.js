/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1B4332', light: '#2D6A4F', dark: '#0B2618' },
        accent: { DEFAULT: '#F36F38', light: '#F6966D', dark: '#D4501A' }, // Changed to orange
        dark: { DEFAULT: '#1D1C38', surface: '#262445', elevated: '#323055' }, // Night background
        light: { DEFAULT: '#F4F4F4', surface: '#FFFFFF', elevated: '#EAEAEA' }, // Day background
        mist: '#E0FBFC',
      },
      fontFamily: {
        display: ['Oswald', 'Bebas Neue', 'sans-serif'], // Narrow/condensed font
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'split-desktop': 'linear-gradient(to right, #F4F4F4 50%, #1D1C38 50%)',
      }
    },
  },
  plugins: [],
}
