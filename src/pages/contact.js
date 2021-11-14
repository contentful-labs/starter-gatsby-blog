import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import ContactForm from '../components/contact-form/contact-form'

const ContactIndex = (props) => {
  const { location } = props
  return (
    <Layout location={location}>
      <Seo title="Contact" />
      <Box bg={useColorModeValue('gray.100', 'gray.700')} height="100%">
        <ContactForm />
      </Box>
    </Layout>
  )
}

export default ContactIndex
