import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import AgroforestryHeader from './AgroforestryHeader'
import AgroforestryBanner from './AgroforestryBanner'
import AgroforestryContent from './AgroforestryContent'

import '../../Style'

const index = () => {
  return (
    <>
    <Header />
        <AgroforestryHeader />
        <AgroforestryBanner />
        <AgroforestryContent />
    <Footer />
    </>
  )
}

export default index