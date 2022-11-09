import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from './Footer/Footer';
import { Quicksand } from '@next/font/google'

const quicksand = Quicksand()
const Layout = ({ children }) => {
  return (
    <>
      <main className={quicksand.className}>
        <Navbar/>
        {children}
        <Footer/>
      </main>
      <style jsx global>
        {`
          body {
            margin: 0;
          }
          a {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Layout