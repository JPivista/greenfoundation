import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'

import '../../Style'

import SustainHeader from './SustainHeader'
import SustainAgriBanner from './SustainAgriBanner'
import SustainContent from './SustainContent'



const Index = () => {
  return (
    <>
    <Header />
    <SustainHeader />
    <SustainAgriBanner />
    <SustainContent />

    <Footer />

    </>
  )
}

export default Index