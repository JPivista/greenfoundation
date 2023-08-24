import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'

import '../../Style'

import TrainingExposureHeader from './TrainingExposureHeader'
import TrainingExposureBanner from './TrainingExposureBanner'
import TrainingExposureContent from './TrainingExposureContent'



const index = () => {
  return (
    <>
    <Header/>
    <TrainingExposureHeader />
    <TrainingExposureBanner />
    <TrainingExposureContent />
    <Footer />
    </>

  )
}

export default index