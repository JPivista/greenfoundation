import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import EnglishPublicationsLoopTemplate from '@/components/LoopTemplate/EnglishPublicationsLoopTemplate'
import EnglishPublicationHeader from './EnglishPublicationHeader'

const index = () => {
  return (
    <>
    <Header />
    <EnglishPublicationHeader />
    <EnglishPublicationsLoopTemplate />
    <Footer />
    </>
  )
}

export default index