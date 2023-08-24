import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import NewsEventsLoopTemplate from '@/components/LoopTemplate/NewsEventsLoopTemplate'

const index = () => {
  return (
    <>
    <Header />
    <NewsEventsLoopTemplate />
    <Footer />
    </>
  )
}

export default index