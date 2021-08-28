import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      '#root': {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }
    }
  }
})
