/* eslint-disable arrow-body-style */
import React from 'react'
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react'
import KeyPoint from './key-point'

const KeyPoints = (props) => {
  const { keypoints = [], title, subtitle } = props
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW="7xl" py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align="center">
          <Heading color={useColorModeValue('brand.100', 'brand.300')}>
            {title}
          </Heading>
          <Text color={useColorModeValue('brand.100', 'brand.300')}>
            {subtitle}
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          overflowY="hidden"
          overflowX="hidden"
        >
          {keypoints.map((keypoint) => {
            return (
              <KeyPoint title={keypoint.title} subtitle={keypoint.subtitle} />
            )
          })}
        </Stack>
      </Container>
    </Box>
  )
}

export default KeyPoints
