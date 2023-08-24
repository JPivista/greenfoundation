import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import '../../Style'
import SeedHeader from './SeedHeader'
import SeedBanner from './SeedBanner'
import SeedContent from './SeedContent'

const index = () => {
  return (
    <>
    <Header />
      <SeedHeader />
      <SeedBanner />
      <SeedContent />
    <Footer />
    </>
  )
}

export default index