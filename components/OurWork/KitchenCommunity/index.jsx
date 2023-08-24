import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import '../../Style'
import KitchenHeader from './KitchenHeader'
import KitchenBanner from './KitchenBanner'
import KitchenContent from './KitchenContent'



const index = () => {
  return (
    <>
    <Header />
    <KitchenHeader />
    <KitchenBanner />
    <KitchenContent />
    <Footer />
    </>
  )
}

export default index