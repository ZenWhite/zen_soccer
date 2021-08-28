import React from 'react'
import { Box, Heading, Image } from '@chakra-ui/react'

import logo from '~assets/images/logo.png'

import { Container } from './logo.styled'

export const Logo = () => (
  <Box d="flex" alignItems="center">
    <Container>
      <Image src={logo} alt="logo" w={26} h={26} />
    </Container>

    <Heading
      as="h4"
      size="md"
      marginLeft="4px"
      color="orange.300"
      children="SoccerStat"
    />
  </Box>
)
