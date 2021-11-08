// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: '#030405',
    200: '#e51c21',
    300: '#fff',
  },
}

const fontSizes = {
  md: '14px',
  lg: '18px',
}

const theme = extendTheme({ colors, fontSizes })

export default theme
