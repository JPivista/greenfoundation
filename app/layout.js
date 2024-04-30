import Head from 'next/head'
import '../components/Style'
import Script from 'next/script'

import Gtag from '../components/SeoComponents/GoogleAnalyticsCode'

export const metadata = {
  title: 'Agro-biodiversity conservation platform fostering sustainable agriculture',
  description: 'Green Foundation works towards the conservation of indigenous seed varieties and helps promote sustainable agriculture through agro bio diversity conservation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Gtag />

      <body>
        {children}
      </body>
    </html>
  )
}

