'use client'
import React from 'react'

import '../../Style'

import Header from '../../shared/Header/Navbar'
import Footer from '../../shared/Footer'

import JourneySoFar from './JourneySoFar'
import JourneyHeader from './JourneyHeader'


const index = () => {
  return (
    <>
    <Header />
    <JourneyHeader />
    <JourneySoFar />
    <Footer />
    </>
  )
}

export default index
