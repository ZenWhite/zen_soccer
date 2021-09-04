import { Link } from 'react-router-dom'

import { Box, Heading, Image, keyframes } from '@chakra-ui/react'

import logo from 'images/logo.png'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Logo = () => (
  <Link to="/">
    <Box d="flex" alignItems="center">
      <Image
        animation={`${spin} 12s linear infinite`}
        src={logo}
        alt="logo"
        w={26}
        h={26}
      />

      <Heading
        as="h4"
        size="md"
        marginLeft="4px"
        color="orange.300"
        children="SoccerStat"
      />
    </Box>
  </Link>
)
