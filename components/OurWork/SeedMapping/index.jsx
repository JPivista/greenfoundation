import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'

import SeedMappingHeader from './SeedMappingHeader'
import SeedMappingContent from './SeedMappingContent'
import SeedMappingBanner from './SeedMappingBanner'

const index = () => {
  return (
   <>
   <Header />
   <SeedMappingHeader />
   <SeedMappingBanner />
   <SeedMappingContent />
   <Footer />
   </>
  )
}

export default index