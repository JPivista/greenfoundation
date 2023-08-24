import React from 'react'

import Header from '../shared/Header'
import Footer from '../shared/Footer'
import PolicyEngagementBanner from './PolicyEngagementBanner'
import PolicyEngagementContent from './PolicyEngagementContent'

import '../Style'

const index = () => {
  return (
    <>
    <Header />
    <PolicyEngagementBanner />
    <PolicyEngagementContent />
    <Footer />
    </>
  )
}

export default index