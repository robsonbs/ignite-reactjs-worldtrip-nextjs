import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#47585B',
      '500': '#999999',
      '100': '#DADADA',
      '50': '#F5F8FA'
    },
    yellow: {
      '500': '#FFBA08',
      '300': 'rgba(255, 186, 8, 0.5)'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900'
      }
    }
  }
})