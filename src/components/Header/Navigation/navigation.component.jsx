import { NavLink } from 'react-router-dom'
import { HStack, Link } from '@chakra-ui/react'

import { links } from './navigation.shape'

export const Navigation = () => (
  <HStack spacing={9} as="nav">
    {links.map((link, id) => (
      <Link
        as={NavLink}
        key={`header-link-${id}`}
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
