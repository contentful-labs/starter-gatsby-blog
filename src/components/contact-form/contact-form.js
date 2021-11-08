/* eslint-disable react/no-children-prop */
import React from 'react'
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
  useColorModeValue,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { faMapMarker, faUser } from '@fortawesome/free-solid-svg-icons'

const ContactForm = () => (
  <Container
    bg={useColorModeValue('brand.300', 'gray.700')}
    maxW="full"
    mt={0}
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
          <Wrap
            justify={{ sm: 'center' }}
            spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
          >
            <WrapItem>
              <Box>
                <Heading
                  margin={{ sm: 'auto' }}
                  textAlign={{ base: 'center', lg: 'left' }}
                  color={useColorModeValue('brand.300', 'brand.100')}
                >
                  Contact
                </Heading>
                <Text
                  textAlign={{ base: 'center', lg: 'left' }}
                  mt={{ sm: 3, md: 3, lg: 5 }}
                  color="gray.500"
                >
                  Fill up the form below to contact
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
                      color="#DCE2FF"
                      _hover={{ border: '2px solid #e51c21' }}
                      leftIcon={<PhoneIcon color="brand.200" size="20px" />}
                    >
                      +32 499 32 00 68
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="220px"
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: '2px solid #e51c21' }}
                      leftIcon={<EmailIcon color="brand.200" size="20px" />}
                    >
                      info@ldbtechnics.com
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="220px"
                      variant="ghost"
                      color="#DCE2FF"
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
                  <VStack spacing={5}>
                    <FormControl id="name">
                      <FormLabel>Uw naam</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={
                            <FontAwesomeIcon size="28px" icon={faUser} />
                          }
                        />
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Uw e-mail</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<EmailIcon color="gray.800" />}
                        />
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Uw vraag</FormLabel>
                      <Textarea
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: 'gray.300',
                        }}
                        placeholder="message"
                      />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        variant="solid"
                        bg="#0D74FF"
                        color="white"
                        _hover={{}}
                      >
                        Send Message
                      </Button>
                    </FormControl>
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

export default ContactForm
