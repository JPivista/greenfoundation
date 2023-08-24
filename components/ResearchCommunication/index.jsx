import React from 'react'

import Header from '../shared/Header'
import Footer from '../shared/Footer'
import ResearchCommunicationBanner from './ResearchCommunicationBanner'
import ResearchCommunicationContent from './ResearchCommunicationContent'

import '../Style'

const index = () => {
  return (
    <>
    <Header />
    <ResearchCommunicationBanner />
    <ResearchCommunicationContent />
    <Footer />
    </>
  )
}

export default index