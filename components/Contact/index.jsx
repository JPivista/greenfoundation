import React from 'react'

import Header from '../shared/Header/Navbar'
import Footer from '../shared/Footer/Footer'

import '../Style'
import ContactForm from './ContactForm'

const index = () => {
  return (
    <>
    <Header />
    <ContactForm />
    <Footer />
    </>
  )
}

export default index