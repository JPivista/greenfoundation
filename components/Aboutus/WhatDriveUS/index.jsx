import React from 'react'
import WhatDriveHeader from './WhatDriveHeader'

import Header from '../../shared/Header/Navbar'
import Footer from '../../shared/Footer'

import '../../Style'
import WhatDriveUs from './WhatDriveUsBanner'
import Content from './Content'
import TabsFunction from './TabsFunction'
import EconomicReason from './EconomicReason'
import PoliticalReasons from './PoliticalReasons'
import SeekingLegislativeSupport from './SeekingLegislativeSupport'
import RaisingAwareness from './RaisingAwareness'
import WomenEmpowerment from './WomenEmpowerment'




const index = () => {
  return (
    <>
    <Header />
    <WhatDriveHeader />
    <WhatDriveUs />
    <Content />
    <TabsFunction />
    <EconomicReason />
    <PoliticalReasons />
    <SeekingLegislativeSupport />
    <RaisingAwareness />
    <WomenEmpowerment />
    <Footer />
    </>
  )
}

export default index