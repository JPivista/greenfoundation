import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import OurReachHeader from './OurReachHeader'
import OurReach from '@/components/Home/OurReach'

const index = () => {
  return (
   <>
   <Header />
   <OurReachHeader />
   <OurReach />
   <Footer />
   </>
  )
}

export default index