import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { ChakraProvider, Container } from '@chakra-ui/react'

import 'focus-visible/dist/focus-visible'
import '@fontsource/open-sans'

import { theme } from '~theme.js'

import { Header } from '~components/Header/header.component'
import { Footer } from '~components/Footer/footer.component'

import { Main } from './app.styled'

export const App = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <Header />

      <Main>
        <Container maxW="container.xl">main</Container>
      </Main>

      <Footer />
    </ChakraProvider>
  </Router>
)
