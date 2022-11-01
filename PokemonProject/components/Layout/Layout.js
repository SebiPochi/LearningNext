import React from 'react'
import { Quicksand } from '@next/font/google'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'
const quicksand = Quicksand()

const Layout = ({ children }) => {
  return (
    <div className={quicksand.className}>
        <Navbar />
          <div className={styles.container}>
            {children}
          </div>
        <Footer/>
    </div>
  )
}

export default Layout