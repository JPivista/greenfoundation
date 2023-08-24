import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import TrenchBundHeader from './TrenchBundHeader'
import TrenchBundBanner from './TrenchBundBanner'
import TrenchBundContent from './TrenchBundContent'

const index = () => {
  return (
    <>
    <Header />

    <TrenchBundHeader />
    <TrenchBundBanner />
    <TrenchBundContent />

    <Footer />
    </>
  )
}

export default index