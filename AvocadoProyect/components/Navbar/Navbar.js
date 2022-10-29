import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <div className='container'>
            <nav>
                <menu>
                    <Link href="/">
                        <a className='link'>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className='link'>About</a>
                    </Link>
                </menu>
            </nav>
        </div>
        <style jsx>
            {`
                .container {
                    background: #44f26b;
                    padding: 4px
                }
                .link {
                    margin-left: 20px;
                    margin-right: 20px;
                    font-size: 18px
                }
                menu {
                    
                }
            `}
        </style>
    </>
  )
}

export default Navbar