import React from 'react'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import ContactForm from '../components/contact-form/contact-form'

const ContactIndex = (props) => {
  const { location } = props
  return (
    <Layout location={location}>
      <Seo title="Contact" />
      <Hero title="Contact" />
      <ContactForm />
    </Layout>
  )
}

export default ContactIndex
