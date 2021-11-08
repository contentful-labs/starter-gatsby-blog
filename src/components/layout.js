import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import '../styles/variables.css'
import '../styles/global.css'
import theme from '../styles/extend-theme'

import Seo from './seo'
import Navigation from './navigation/navigation'
import Footer from './footer/footer'

const Template = ({ children }) => (
  <ChakraProvider theme={theme}>
    <Seo />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </ChakraProvider>
)

export default Template
