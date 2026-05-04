import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

// Minimal theme: fonts + core brand colors only.
// Deep component theming is deferred to the main site.
const theme = extendTheme({
  fonts: {
    heading: "'Jost', sans-serif",
    body: "'Jost', sans-serif",
    mono: "'Inconsolata', monospace",
  },
  colors: {
    brand: {
      primary: '#0F1574',
      purple: '#7058FF',
      pink: '#FF4F84',
      orange: '#FFA41C',
      green: '#B0EB33',
      blue: '#2C81ED',
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
