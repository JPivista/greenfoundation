import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import Head from 'next/head'
import KannadaPublicationHeader from './KannadaPublicationHeader'
import KannadaPublicationsContent from './KannadaPublicationsContent'


const index = () => {
  return (
    <>
        <Header />
        <KannadaPublicationHeader />
        <KannadaPublicationsContent />
        <Footer />
    </>
  )
}

export default index