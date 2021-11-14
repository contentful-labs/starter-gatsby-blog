/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as MainLink } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const ContactIndex = (props) => {
  const { location } = props
  return (
    <Layout location={location}>
      <Seo title="Contact" />
      <Container maxW="5xl">
        <Stack
          textAlign="center"
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight="110%"
          >
            <Text color="red.400" maxW="3xl">
              Bedankt voor u interesse
            </Text>
          </Heading>
          <Text color="gray.500" maxW="3xl">
            wij contacteren u zo spoedig mogelijk!
          </Text>
          <Stack spacing={6} direction="row">
            <MainLink to="/">
              <Button
                rounded="full"
                px={6}
                color={useColorModeValue('brand.300', 'brand.100')}
                backgroundColor={useColorModeValue('brand.200', 'brand.200')}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('brand.100', 'brand.300'),
                  color: useColorModeValue('brand.300', 'brand.100'),
                }}
              >
                <Link px={2} py={1} fontSize="sm" rounded="md">
                  terug naar startpagina
                </Link>{' '}
              </Button>
            </MainLink>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  )
}

export default ContactIndex
