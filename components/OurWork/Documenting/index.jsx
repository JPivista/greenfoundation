import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'

import '../../Style'

import DocHeader from './DocHeader'
import DocBanner from './DocBanner'
import DocContent from './DocContent'
const index = () => {
  return (
    <>
    <Header />
    <DocHeader />
    <DocBanner />
    <DocContent />
    <Footer />
    </>
  )
}

export default index