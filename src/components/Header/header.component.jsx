import React from 'react'
import { Container } from '@chakra-ui/react'

import { Logo } from '~components/Logo/logo.component'
import { Navigation } from './Navigation/navigation.component'

import { Wrapper } from './header.styled'

export const Header = () => (
  <Wrapper>
    <Container
      maxW="container.xl"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Logo />

      <Navigation />
    </Container>
  </Wrapper>
)
