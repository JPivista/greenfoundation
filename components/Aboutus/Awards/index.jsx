import React from 'react'

import Header from '../../../components/shared/Header'
import Footer from '../../../components/shared/Footer'

import '../../Style'
import AwardsHeader from './AwardsHeader'
import AwardsBanner from './AwardsBanner'
import Awards from './Awards'

const index = () => {
  return (
    <>
    <Header />
    <AwardsHeader />
    <AwardsBanner />
    <Awards />
    <Footer />
    </>
  )
}

export default index