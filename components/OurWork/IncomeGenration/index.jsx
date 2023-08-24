import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'
import '../../Style'

import IncomeHeader from './IncomeHeader'
import IncomeBanner from './IncomeBanner'
import IncomeContent from './IncomeContent'


const index = () => {
  return (
    <>
    <Header />
    
    <IncomeHeader />
    <IncomeBanner />
    <IncomeContent />

    <Footer />
    </>
  )
}

export default index