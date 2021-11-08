/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

const Hero = (props) => {
  const { title, subtitle, image } = props

  return (
    <Container maxW="7xl">
      <Stack
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            color={useColorModeValue('brand.100', 'brand.300')}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            {title}
          </Heading>
          <Text color="gray.500">{subtitle}</Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              rounded="full"
              size="lg"
              fontWeight="normal"
              px={6}
              colorScheme="red"
              bg="brand.200"
              color="brand.300"
              _hover={{ bg: 'red.400' }}
            >
              Vraag een offerte aan
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify="center"
          align="center"
          position="relative"
          w="full"
        >
          <Box
            position="relative"
            height="300px"
            rounded="2xl"
            boxShadow="2xl"
            width="full"
            overflow="hidden"
          >
            {image && (
              <GatsbyImage
                objectFit="cover"
                style={{ width: '100%', height: '100%', align: 'center' }}
                className={image}
                alt={title}
                image={image}
              />
            )}
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}

export default Hero
