import React from 'react'
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ pageProps }) => {
  return (
    <div>
      <Navbar/>
      {pageProps}
      <footer>footer</footer>
    </div>
  )
}

export default Layout