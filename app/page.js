import Image from 'next/image'
import styles from './page.module.css'

import Header from '../components/shared/Header/index.jsx'
import Footer from '../components/shared/Footer/index.jsx'


import MainHome from '../pages/home'

import './globals.css'


export default function Home() {
  return (
    <>
      <Header />
      <MainHome />
      <Footer />
    </>
  )
}
