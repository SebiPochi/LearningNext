import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    window.fetch('api/avo')
    .then((res) => res.json()
    .then(({data, length}) => setProductList(data))
    )
  }, [])
  

  return (
    <div>
        <h1>Hola Mundo!</h1>
        {
          productList.map((product) => 
            <div>
              {product.id}
            </div>
          )
        }
    </div>
  )
}

export default Home