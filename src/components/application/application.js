/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-children-prop */
import React, { useState, useRef } from 'react'
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { navigate } from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { faMapMarker, faUser } from '@fortawesome/free-solid-svg-icons'

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const ApplicationForm = (props) => {
  const { formRef } = props
  const [form, setForm] = useState({
    name: '',
    email: '',
    tel: '',
    motivation: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const hiddenForm = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: encode({
        'form-name': hiddenForm.getAttribute('name'),
        ...form,
      }),
    })
      .then(() => navigate(hiddenForm.getAttribute('action')))
      // eslint-disable-next-line no-alert
      .catch((error) => alert(error))
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <Container
      bg={useColorModeValue('brand.300', 'gray.800')}
      maxW="full"
      mt={{ sm: 10, md: 20, lg: 100 }}
      mb={{ sm: 30, md: 20, lg: 100 }}
      centerContent
      overflow="hidden"
    >
      <Flex>
        <Box
          bg={useColorModeValue('brand.100', 'brand.300')}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap justify="center" spacing={{ base: 5, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading
                    margin={{ sm: 'auto' }}
                    textAlign={{ base: 'center', lg: 'left' }}
                    color={useColorModeValue('brand.300', 'brand.100')}
                  >
                    Applicatie
                  </Heading>
                  <Text
                    textAlign={{ base: 'center', lg: 'left' }}
                    mt={{ sm: 3, md: 3, lg: 5 }}
                    color="gray.500"
                  >
                    onderstaand onze contact informatie
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack
                      pl={0}
                      spacing={3}
                      alignItems={{ base: 'center', lg: 'flex-start' }}
                    >
                      <Button
                        size="md"
                        height="48px"
                        width="220px"
                        variant="ghost"
                        color={useColorModeValue('"#DCE2FF"', 'brand.100')}
                        _hover={{ border: '2px solid #e51c21' }}
                        leftIcon={<PhoneIcon color="brand.200" size="20px" />}
                      >
                        <Link href="tel:+32499320068">+32 499 32 00 68</Link>
                      </Button>
                      <Button
                        href="mailto:info@ldbtechnics.com"
                        size="md"
                        height="48px"
                        width="220px"
                        variant="ghost"
                        color={useColorModeValue('"#DCE2FF"', 'brand.100')}
                        _hover={{ border: '2px solid #e51c21' }}
                        leftIcon={<EmailIcon color="brand.200" size="20px" />}
                      >
                        <Link href="mailto:info@ldbtechnics.com">
                          info@ldbtechnics.com
                        </Link>
                      </Button>

                      <Button
                        size="md"
                        height="48px"
                        width="220px"
                        variant="ghost"
                        type="location"
                        color={useColorModeValue('"#DCE2FF"', 'brand.100')}
                        _hover={{ border: '2px solid #e51c21' }}
                        leftIcon={
                          <Box color="brand.200">
                            <FontAwesomeIcon size="20px" icon={faMapMarker} />
                          </Box>
                        }
                      >
                        8700 Kanegem
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={8}>
                      <form
                        name="application"
                        data-netlify="true"
                        action="/thanks/"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                      >
                        <p hidden>
                          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                          <label>
                            Don’t fill this out:{' '}
                            <input name="bot-field" onChange={handleChange} />
                          </label>
                        </p>

                        <FormControl id="name">
                          <FormLabel>Uw naam</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={
                                <FontAwesomeIcon size="28px" icon={faUser} />
                              }
                            />
                            <Input
                              ref={formRef}
                              name="name"
                              type="text"
                              size="md"
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="mail">
                          <FormLabel mt="2">Uw e-mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<EmailIcon color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              name="email"
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="tel">
                          <FormLabel mt="2">Uw telefoon</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<PhoneIcon color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              name="tel"
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel mt="2">Uw motivatie</FormLabel>
                          <Textarea
                            name="motivation"
                            onChange={handleChange}
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        {/* <FormControl id="cv">
                          <FormLabel mt="2">Uw CV</FormLabel>
                          <FileInput file={file} setFile={setFile} />
                        </FormControl> */}
                        <FormControl id="name" float="right">
                          <Button
                            mt={{ sm: 3, md: 3, lg: 5 }}
                            variant="solid"
                            bg="brand.200"
                            color="white"
                            _hover={{}}
                            type="submit"
                          >
                            Verzenden
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}

export default ApplicationForm
