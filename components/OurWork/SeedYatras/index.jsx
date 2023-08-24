import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import SeedYatrasHeader from './SeedYatrasHeader'
import SeedYatrasBanner from './SeedYatrasBanner'
import SeedYatrasContent from './SeedYatrasContent'

const index = () => {
  return (
    <>
    <Header />
    <SeedYatrasHeader />
    <SeedYatrasBanner />
    <SeedYatrasContent />
    <Footer />
    </>
  )
}

export default index