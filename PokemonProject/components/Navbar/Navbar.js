import React from 'react'
import styles from './Button.module.css'
import Image from 'next/image'
import logo from '@assets/logo.png'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <menu>
            <Image src={logo} className={styles.logo} alt="logo"/>
        </menu>
    </nav>
  )
}

export default Navbar