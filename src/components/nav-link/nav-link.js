/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, useColorModeValue } from '@chakra-ui/react'
import { Link as MainLink } from 'gatsby'

const NavLink = ({ children, url }) => (
  <MainLink to={url}>
    <Link
      px={2}
      py={1}
      fontSize="sm"
      rounded="md"
      color={useColorModeValue('brand.100', 'brand.300')}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('brand.200', 'brand.300'),
        color: useColorModeValue('brand.300', 'brand.100'),
      }}
    >
      {children}
    </Link>
  </MainLink>
)
export default NavLink
