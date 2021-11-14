import React from 'react'
import {
  Box,
  Flex,
  HStack,
  Image,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NavLink from '../nav-link/nav-link'
import SwitchTheme from '../switch-theme/switch-theme'

const links = [
  { name: 'Home', url: '/' },
  { name: 'Projecten', url: '/projecten' },
  { name: 'Vacatures', url: '/vacatures' },
  { name: 'Contact', url: '/contact' },
]

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bg = useColorModeValue('gray.100', 'gray.900')

  const renderLinks = () =>
    links.map(({ name, url }) => (
      <NavLink key={url} url={url}>
        {name}
      </NavLink>
    ))

  return (
    <>
      <Box bg={bg} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            color={useColorModeValue('brand.100', 'brand.300')}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box>
              <Image
                boxSize="100px"
                fit="scale-down"
                src="/images/_logo.png"
                alt="logo"
              />
            </Box>
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              {renderLinks()}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <SwitchTheme />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {renderLinks()}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default NavBar
