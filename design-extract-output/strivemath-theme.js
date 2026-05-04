// Strive Math — React / CSS-in-JS Theme
// Extracted from https://www.strivemath.com/

const theme = {
  colors: {
    primary: '#0F1574',
    primaryLight: '#878AB9',
    primaryOrange: {
      100: '#FF6635',
      50: '#FFB39A',
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
      white: '#FFFFFF',
    },
    bg: {
      white: '#FFFFFF',
      frosted: '#ffffffbb',
      navy: '#484D97',
      purpleTint: '#f1eeff',
      subtle: '#f3f3f8',
      dark: '#222222',
    },
  },

  gradients: {
    rainbowCta: 'linear-gradient(to right, #FFA41C, #FF4F84, #7058FF)',
    rainbowFull: 'linear-gradient(to right, #FFA41C, #FF4F84, #7058FF, #2C81ED, #B0EB33)',
    navyHero: 'linear-gradient(315deg, #134297 0%, #0F3C8E 20%, #0B3785 40%, #07317C 60%, #032B74 80%, #00266b 100%)',
    darkFade: 'linear-gradient(to bottom, #484C97, #484C9766)',
    coralPurple: 'linear-gradient(to right, #FE6636, #FF4F84 40%, #7058FF 80%)',
  },

  typography: {
    fonts: {
      heading: "'Jost', sans-serif",
      body: "'Roboto', sans-serif",
      mono: "'Inconsolata', monospace",
    },
    fontSizes: {
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
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    letterSpacings: {
      tight: '0.01rem',
      wide: '0.02em',
    },
  },

  radii: {
    sm: '5px',
    md: '7px',
    card: '16px',
    cardLg: '24px',
    cardXl: '32px',
    pill: '100px',
    full: '9999px',
  },

  shadows: {
    card: '0px 8px 30.26px rgba(15, 21, 116, 0.07)',
    cardMd: '0px 8px 24px rgba(0, 0, 0, 0.1)',
    cardLg: '0px 15px 30px 0px rgba(0, 0, 0, 0.1)',
    elevated: '0 14px 24px #00000033',
    button: '0px 4px 11px rgba(0, 0, 0, 0.31)',
    focus: '0px 0px 0px 3px white, 0px 0px 0px 6px hsla(249, 100%, 67%, 0.3)',
    glow: '0px 0px 48px 0px rgb(199 199 224)',
  },

  transitions: {
    fast: '0.15s all',
    base: '0.2s all',
    transform: 'transform 0.3s',
  },

  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1230px',
    xl: '1280px',
  },
}

export default theme
