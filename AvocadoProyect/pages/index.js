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
<<<<<<< HEAD
      <div className='columns-2 md'>
          {
            productList.map((product) => 
              <div className='p-4 h-40 border-4 '>
=======
      <div className='card-container'>
          {
            productList.map((product) => 
              <div className='card'>
>>>>>>> 8c5a4f6d37347c89b86aef6bd0ba5f8318eb7c39
                <p>{product.name}</p>
                <p>{product.id}</p>
                <p>${product.price}</p>
              </div>
            )
          }
      </div>
<<<<<<< HEAD
=======
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
>>>>>>> 8c5a4f6d37347c89b86aef6bd0ba5f8318eb7c39
    </>
  )
}

export default Home