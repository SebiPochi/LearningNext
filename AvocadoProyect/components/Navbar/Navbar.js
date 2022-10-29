import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../../assets/logoPage.png'
const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <menu>
                <Image objectFit='contain' objectPosition='left' width={70} height={70} className='logo' src={logoImage}/>
                <Link href="/">
                    <a className='link'>Home</a>
                </Link>
                <Link href="/about">
                    <a className='link'>About</a>
                </Link>
            </menu>
        </nav>
        <style jsx>
            {`
                .navbar {
                    background: #c7ffd6;
                    padding: 4px;
                    min-height: 6vh
                }
                .link {
                    margin-left: 20px;
                    margin-right: 20px;
                    font-size: 18px
                }
                .logo {
                }
                menu {
                    padding-inline-start: 40px;
                    margin-block-start: .5em;
                    margin-block-end: .5em;
                    align-self: center
                }
            `}
        </style>
    </>
  )
}

export default Navbar