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
      <div className='lg:columns-3 md:columns-2 ms:columns-1 px-5'>
          {
            productList.map((product) => 
              <div className='p-4 h-40 border-4 '>
                <p className='font-bold'>{product.name}</p>
                <p>{product.id}</p>
                <p>${product.price}</p>
                {/* <Image 
                  src={product.image}
                  width={200}
                  height={200}
                /> */}
              </div>
            )
          }
      </div>
    </>
  )
}

export default Home