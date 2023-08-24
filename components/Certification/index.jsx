import React from 'react'

import Header from '../shared/Header'
import Footer from '../shared/Footer'

import '../Style'
import CertificationBanner from './CertificationBanner'
import CertificationContent from './CertificationContent'

const index = () => {
  return (
    <>
    <Header />
    <CertificationBanner />
    <CertificationContent />
    <Footer />
    </>
  )
}

export default index