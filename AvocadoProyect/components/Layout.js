import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from './Footer/Footer';
// import { Inter } from '@next/font/google'
// const inter = Inter()

const Layout = ({ children }) => {
  return (
    <>
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
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