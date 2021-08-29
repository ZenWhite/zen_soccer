import { Container, Box } from '@chakra-ui/react'

import { Logo } from 'components/Logo/logo.component'
import { Navigation } from './Navigation/navigation.component'

export const Header = () => (
  <Box
    as="header"
    p="20px 0"
    borderBottom="1px solid"
    borderBottomColor="blackAlpha.700"
  >
    <Container
      maxW="container.xl"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Logo />

      <Navigation />
    </Container>
  </Box>
)
