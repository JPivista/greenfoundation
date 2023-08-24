import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer  from '@/components/shared/Footer/Footer'
import MahilaSamvada from './MahilaSamvada'

import '../../Style'

const index = () => {
  return (
    <>
        <Header />
        <MahilaSamvada />
        <Footer />
    </>
  )
}

export default index