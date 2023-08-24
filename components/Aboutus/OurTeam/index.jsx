import React from 'react'
import OurTeamHeader from './OurTeamHeader'

import Header from '../../../components/shared/Header'
import Footer from '../../../components/shared/Footer'

import '../../Style'
import CoreTeam from './CoreTeam'
import Banner from '../OurTeam/Banner'


const index = () => {
  return (
    <>
    <Header />
    <OurTeamHeader />
    <Banner />
    <CoreTeam />
    <Footer />
    </>
  )
}

export default index