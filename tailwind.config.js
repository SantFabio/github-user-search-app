/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '1.5rem',
        sm: '6.125rem',
        md: '22.188rem'
      },
      // screens: {
      //   // xs: '100%',
      //   sm: '35.813rem',
      //   md: '45.625rem'
      // }
    },
    extend: {
      screens: {
        'xs': '375px',
        'sm': '768px',
        'md': '1372.14px',
        'lg': '1440px',
        'xl': '1440px',
        '2xl': '1440px'
      },
      boxShadow: {
        '3xl': '0px 16px 30px -10px rgba(70, 96, 187, 0.20)',
        '4xl': '0px 16px 30px -10px rgba(70, 96, 187, 0.20)',
      },
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
      },
      colors: {
        // Light Mode Colors:
        'blue-primary': '#0079FF',
        'blue-secondary': '#60ABFF',
        'slate-gray': '#697C9A',
        'steel-blue': '#4B6A9B',
        'charcoal': '#2B3442',
        'light-sky': '#F6F8FF',
        'pure-white': '#FEFEFE',

        // Dark Mode Colors:
        'dark-navy': '#141D2F',
        'midnight-blue': '#1E2A47',
      }
    },
  },
  plugins: [],
}
