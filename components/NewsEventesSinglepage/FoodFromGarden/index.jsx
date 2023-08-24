import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import FoodFromGarden from './FoodFromGarden'

const index = () => {
  return (
    <>
    <Header />
    <FoodFromGarden />
    <Footer />
    </>
  )
}

export default index