import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import SeedBanksHeader from './SeedBanksHeader'
import SeedBanksBanner from './SeedBanksBanner'
import SeedBanksContent from './SeedBanksContent'

const index = () => {
  return (
    <>
    <Header />
    <SeedBanksHeader />
    <SeedBanksBanner />
    <SeedBanksContent />
    <Footer />
    </>
  )
}

export default index