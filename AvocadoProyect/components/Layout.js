import React from 'react'
import Navbar from "@components/Navbar/Navbar";
import styles from './style.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar/>
      {children}
      <footer className='container'>footer</footer>
      <style jsx>
      {`
      .container {
        background: red
      }
      `}
      </style>
    </div>
  )
}

export default Layout