import React from 'react'
import HeroBanner from './HeroBanner'
import OurWork from './OurWork'
import NewsandEvents from './NewsandEvents'
import OurReach from './OurReach'
import Partners from './Partners'
import FormHome from './Form'
import Header from '../shared/Header/Navbar'
import Footer from '../shared/Footer/Footer'


// import '../Style'

const index = () => {
  return (
    <>

    <Header />
      <HeroBanner />
      <OurWork />
      <NewsandEvents />
      <OurReach />
      <Partners />
      <FormHome />
    <Footer />  
    </>
  )
}

export default index