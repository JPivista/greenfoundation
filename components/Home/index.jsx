'use client'
import React from 'react'
import HeroBanner from './HeroBanner'
import OurWork from './OurWork'
import NewsandEvents from './NewsandEvents'
import OurReach from './OurReach'
import Partners from './Partners'
import FormHome from './Form'
import Header from '../shared/Header/Navbar'
import Footer from '../shared/Footer/Footer'
import { NextSeo } from 'next-seo'


import '../Style'

const index = () => {
  return (
    <>
      <NextSeo
        title="Agro-biodiversity conservation platform fostering sustainable agriculture"
        description="Green Foundation works towards the conservation of indigenous seed varieties and helps promote sustainable agriculture through agro bio diversity conservation"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Agro-biodiversity conservation platform fostering sustainable agriculture',
          description: 'Green Foundation works towards the conservation of indigenous seed varieties and helps promote sustainable agriculture through agro bio diversity conservation',
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
      <HeroBanner />
      <OurWork />
      <NewsandEvents />
      <OurReach />
      <Partners />
      <FormHome />
      <Footer />
    </>
  )
}

export default index