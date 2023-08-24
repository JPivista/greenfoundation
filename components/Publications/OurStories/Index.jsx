import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import OurStoriesLoopTemplate from '@/components/LoopTemplate/OurStoriesLoopTemplate'

const Index = () => {
  return (
    <>
    <Header />
    <OurStoriesLoopTemplate />
    <Footer />
    </>
  )
}

export default Index