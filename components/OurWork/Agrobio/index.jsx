'use client'
import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'

import '../../Style'

import AgroHeader from './AgroHeader'
import AgroBanner from './AgroBanner'
import AgroContent from './AgroContent'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>

  
  <NextSeo
        title="Seed Banks: Preserving Agrobiodiversity"
        description="Empowering communities to conserve biological diversity practice sustainable agriculture through community seed banks GREEN s pioneering efforts inspire nationwide impact"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Seed Banks: Preserving Agrobiodiversity',
          description: 'Empowering communities to conserve biological diversity practice sustainable agriculture through community seed banks GREEN s pioneering efforts inspire nationwide impact',
          images: [
            {
              url: '/our-work/agrobio/agrobiodiversity_v.png',
              width: 800,
              height: 600,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            {
              url: '/our-work/agrobio/agrobiodiversity_v.png',
              width: 900,
              height: 800,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            { url: '/our-work/agrobio/agrobiodiversity_v.png' },
            { url: '/our-work/agrobio/agrobiodiversity_v.png' },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

    <Header />
    <AgroHeader />
    <AgroBanner />
    <AgroContent />
    <Footer />
    </>
    
  )
}

export default index