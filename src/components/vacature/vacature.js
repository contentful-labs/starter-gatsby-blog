import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'

const Vacature = (props) => {
  const { formRef, vacature } = props
  console.log({ vacature })
  const [underlineTitle, ...rest] = vacature.title.split(' ')
  return (
    <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={6} w="full" maxW="lg">
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'brand.200',
                zIndex: -1,
              }}
            >
              {underlineTitle}
            </Text>
            <br />{' '}
            <Text color={useColorModeValue('brand.100', 'brand.300')} as="span">
              {rest.join(' ')}
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
            <div
              dangerouslySetInnerHTML={{
                __html: vacature.description.childMarkdownRemark.html,
              }}
            />
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded="full"
              bg="brand.200"
              color="white"
              _hover={{
                bg: 'brand.100',
              }}
              onClick={() => {
                formRef.current.focus()
              }}
            >
              appliceer
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        {/* <Image
          alt="Login Image"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        /> */}
        <GatsbyImage
          objectFit="contain"
          style={{
            width: '100%',
            height: '100%',
            align: 'center',
            'border-radius': '10px',
          }}
          alt=""
          objectPosition="center"
          image={vacature.image.gatsbyImageData}
        />
      </Flex>
    </Stack>
  )
}

export default Vacature
