
import React from 'react'

import SituHeader from './SituHeader'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import '../../Style'
import SituBanner from './SituBanner'
import SituContent from './SituContent'


const index = () => {
  return (
    <>
    <Header />
    <SituHeader />
    <SituBanner />
    <SituContent />
    <Footer />
    </>
  )
}

export default index