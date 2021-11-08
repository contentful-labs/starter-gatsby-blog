import React from 'react'
import { Stack, useColorModeValue, Heading, Text, Box } from '@chakra-ui/react'

const KeyPoint = (props) => {
  const { title = '', subtitle = '' } = props
  return (
    <Box>
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="lg"
        p={8}
        rounded="xl"
        align="center"
        pos="relative"
      >
        <Heading
          as="h3"
          fontSize="xl"
          color={useColorModeValue('brand.100', 'brand.300')}
        >
          {title}
        </Heading>
        <Text
          textAlign="center"
          color={useColorModeValue('gray.600', 'gray.400')}
          fontSize="sm"
        >
          {subtitle}
        </Text>
      </Stack>
    </Box>
  )
}

export default KeyPoint
