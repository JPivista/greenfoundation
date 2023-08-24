import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'

import '../../Style'

import AgroHeader from './AgroHeader'
import AgroBanner from './AgroBanner'
import AgroContent from './AgroContent'

const index = () => {
  return (
    <>
    <Header />
    <AgroHeader />
    <AgroBanner />
    <AgroContent />
    <Footer />
    </>
    
  )
}

export default index