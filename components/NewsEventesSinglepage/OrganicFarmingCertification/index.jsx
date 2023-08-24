import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import OrganicFarmingCertification from './OrganicFarmingCertification'

const index = () => {
  return (
    <>
    <Header />

    <OrganicFarmingCertification />

    <Footer />
    </>
  )
}

export default index