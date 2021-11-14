/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const SocialButton = (props) => {
  const { children, label, href } = props
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallWithLogoLeft() {
  return (
    <Box
      position={{ md: 'fixed' }}
      bottom="0"
      left="0"
      width="100vw"
      zIndex="10"
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text mr="auto" flex="1" m="auto">
          made with
          <FontAwesomeIcon style={{ margin: '0px 5px' }} icon={faHeart} />
          by Henri De Bel
        </Text>
        <Text flex="1" display="flex" justifyContent="center">
          © 2021 LDB-technics
        </Text>
        <Stack
          direction="row"
          spacing={6}
          ml="auto"
          flex="1"
          display="flex"
          justifyContent="flex-end"
        >
          <SocialButton label="Instagram" href="#">
            <FontAwesomeIcon style={{ margin: '0px 5px' }} icon={faFacebook} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
