import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'
import '../../Style'
import FarmHeader from './FarmHeader'
import FarmBanner from './FarmBanner'
import FarmContent from './FarmContent'


const index = () => {
  return (
    <>
    <Header />
        <FarmHeader />
        <FarmBanner />
        <FarmContent />
    <Footer />
    </>
  )
}

export default index