import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react'

const Speciality = (props) => {
  const { imgUrl, title, imageData, description } = props
  return (
    <Center py={12} display="contents">
      <Box
        role="group"
        p={6}
        maxW="330px"
        w="full"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="2xl"
        rounded="lg"
        pos="relative"
        zIndex={1}
      >
        <Box
          rounded="lg"
          mt={-12}
          pos="relative"
          height="230px"
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${imgUrl})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <GatsbyImage
            image={imageData}
            objectFit="cover"
            style={{ borderRadius: '10px' }}
          />
        </Box>
        <Stack pt={10} align="center">
          <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
            {title}
          </Heading>
          <Stack direction="row" align="center">
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              {description}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

export default Speciality
