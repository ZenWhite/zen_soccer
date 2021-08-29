import { NavLink } from 'react-router-dom'
import { HStack, Link } from '@chakra-ui/react'

import { links } from './navigation.shape'

import { id } from 'utils/id'

export const Navigation = () => (
  <HStack spacing={9} as="nav">
    {links.map((link) => (
      <Link
        as={NavLink}
        key={id('header-link')}
        fontSize="sm"
        fontWeight="bold"
        exact
        activeStyle={{
          color: '#F6AD55'
        }}
        {...link}
      />
    ))}
  </HStack>
)
