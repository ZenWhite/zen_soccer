import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider, Container, Box } from '@chakra-ui/react'

import 'focus-visible/dist/focus-visible'
import '@fontsource/open-sans'

import { theme } from 'theme.js'

import { Header } from 'components/Header/header.component'
import { Footer } from 'components/Footer/footer.component'

import { League } from 'League/league.component'

export const App = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <Header />

      <Box as="main" p="80px 0">
        <Container maxW="container.xl">
          <Switch>
            <Route path={['/', '/league']} exact component={League} />
          </Switch>
        </Container>
      </Box>

      <Footer />
    </ChakraProvider>
  </Router>
)
