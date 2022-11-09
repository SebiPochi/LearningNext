import React, { useState, useEffect } from 'react'
import Image from 'next/image'
const Home = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    window.fetch('api/avo')
    .then((res) => res.json()
    .then(({data, length}) => setProductList(data))
    )
  }, [])
  

  return (
    <>
      <div className='card-container'>
          {
            productList.map((product) => 
              <div className='card'>
                <p>{product.name}</p>
                <p>{product.id}</p>
                <p>${product.price}</p>
              </div>
            )
          }
      </div>
      <style jsx>
          {`
          .card {
            background: #f5fff5
          }

          .card-container{
            display: flex;
            flex-flow: column wrap;
            
          }
          `}
      </style>
    </>
  )
}

export default Home