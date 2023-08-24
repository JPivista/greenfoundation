import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import SiltAppHeader from './SiltAppHeader'
import SiltAppBanner from './SiltAppBanner'
import SiltAppContent from './SiltAppContent'

const index = () => {
  return (
    <>
    <Header />

    <SiltAppHeader />
    <SiltAppBanner />
    <SiltAppContent />

    <Footer />
    </>
  )
}

export default index