import React from 'react'
import PartnersHeader from './PartnersHeader'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import Banner from './Banner'
import OurPartners from './OurPartners'

const index = () => {
  return (
    <>
    <Header />
    <PartnersHeader />
    <Banner />
    <OurPartners />
    <Footer />
    </>
  )
}

export default index