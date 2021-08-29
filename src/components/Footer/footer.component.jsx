import { Container, Box } from '@chakra-ui/react'

import { Logo } from 'components/Logo/logo.component'

export const Footer = () => (
  <Box as="footer" marginTop="auto" p="20px 0" background="blackAlpha.900">
    <Container centerContent maxW="container.xl">
      <Logo />
    </Container>
  </Box>
)
