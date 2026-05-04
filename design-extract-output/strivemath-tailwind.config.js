/** @type {import('tailwindcss').Config} */
// Strive Math — Tailwind CSS Theme
// Extracted from https://www.strivemath.com/

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F1574',
          light: '#878AB9',
          orange: {
            DEFAULT: '#FF6635',
            50: '#FFB39A',
          },
        },
        accent: {
          purple: '#7058FF',
          pink: '#FF4F84',
          orange: '#FFA41C',
          green: '#B0EB33',
          blue: '#2C81ED',
        },
        text: {
          dark: '#575863',
          muted: '#B1B1C2',
        },
        navy: '#484D97',
        'purple-tint': '#f1eeff',
        'subtle-bg': '#f3f3f8',
      },

      fontFamily: {
        heading: ['Jost', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        mono: ['Inconsolata', 'monospace'],
      },

      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '30px',
        '3xl': '40px',
        hero: '60px',
        display: '100px',
      },

      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
      },

      borderRadius: {
        sm: '5px',
        md: '7px',
        card: '16px',
        'card-lg': '24px',
        'card-xl': '32px',
        pill: '100px',
        full: '9999px',
      },

      boxShadow: {
        card: '0px 8px 30.26px rgba(15, 21, 116, 0.07)',
        'card-md': '0px 8px 24px rgba(0, 0, 0, 0.1)',
        'card-lg': '0px 15px 30px 0px rgba(0, 0, 0, 0.1)',
        elevated: '0 14px 24px #00000033',
        button: '0px 4px 11px rgba(0, 0, 0, 0.31)',
        focus: '0px 0px 0px 3px white, 0px 0px 0px 6px hsla(249, 100%, 67%, 0.3)',
        glow: '0px 0px 48px 0px rgb(199 199 224)',
      },

      backgroundImage: {
        'rainbow-cta': 'linear-gradient(to right, #FFA41C, #FF4F84, #7058FF)',
        'rainbow-full': 'linear-gradient(to right, #FFA41C, #FF4F84, #7058FF, #2C81ED, #B0EB33)',
        'navy-hero': 'linear-gradient(315deg, #134297 0%, #0F3C8E 20%, #0B3785 40%, #07317C 60%, #032B74 80%, #00266b 100%)',
        'dark-fade': 'linear-gradient(to bottom, #484C97, #484C9766)',
        'coral-purple': 'linear-gradient(to right, #FE6636, #FF4F84 40%, #7058FF 80%)',
      },

      screens: {
        sm: '480px',
        md: '768px',
        lg: '1230px',
        xl: '1280px',
      },

      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
      },

      letterSpacing: {
        tight: '0.01rem',
        wide: '0.02em',
      },
    },
  },
  plugins: [],
}
