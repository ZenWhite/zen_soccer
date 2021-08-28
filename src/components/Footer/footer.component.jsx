import React from 'react'
import { Container } from '@chakra-ui/react'

import { Logo } from 'components/Logo/logo.component'

import { Wrapper } from './footer.styled'

export const Footer = () => (
  <Wrapper>
    <Container d="flex" justifyContent="center" maxW="container.xl">
      <Logo />
    </Container>
  </Wrapper>
)
