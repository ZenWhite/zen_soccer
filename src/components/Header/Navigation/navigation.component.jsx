import { HStack, Link } from '@chakra-ui/react'
import React from 'react'

import { NavLink } from 'react-router-dom'

import { links } from './navigation.shape'

export const Navigation = () => (
  <HStack spacing="36px">
    {links.map((link, id) => (
      <Link
        as={NavLink}
        key={`header-link-${id}`}
        fontSize="14px"
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
