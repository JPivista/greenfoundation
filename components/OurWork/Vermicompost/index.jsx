import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'

import VermicompostHeader from './VermicompostHeader'
import VermicompostBanner from './VermicompostBanner'
import VermicompostContent from './VermicompostContent'

const index = () => {
  return (
  <>
  <Header />
  <VermicompostHeader />
  <VermicompostBanner />
  <VermicompostContent />
  <Footer />
  </>
  )
}

export default index