import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'
import AnnualReportsHeader from './AnnualReportsHeader'
import AnnualReportsContent from './AnnualReportsContent'

const index = () => {
  return (
    <>
    <Header />
        <AnnualReportsHeader />
        <AnnualReportsContent />
    <Footer />
    </>
  )
}

export default index